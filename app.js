// === Глобальные переменные ===
let categories = JSON.parse(localStorage.getItem('linkora_categories') || '[]');
let currentCategoryId = null;
let viewMode = 'categories'; // 'categories' | 'favourites'
let activePopover = null;

// Гарантируем наличие t()
if (typeof t !== 'function') {
  console.error('⚠️ Функция локализации t() не найдена!');
}

// === Вспомогательные функции модальных окон ===

function showModal(content, onMount = null) {
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = content;
  document.body.appendChild(modal);
  if (onMount) onMount(modal);
  return modal;
}

function showConfirmModal(title, message, onConfirm) {
  const modal = showModal(`
    <h3>${title}</h3>
    <p>${message}</p>
    <div>
      <button id="confirmYesBtn">${t('yes')}</button>
      <button id="confirmNoBtn">${t('no')}</button>
    </div>
  `);
  modal.querySelector('#confirmYesBtn').onclick = () => {
    onConfirm();
    document.body.removeChild(modal);
  };
  modal.querySelector('#confirmNoBtn').onclick = () => {
    document.body.removeChild(modal);
  };
}

function showMessage(message, buttonText = t('close')) {
  const modal = showModal(`
    <p>${message}</p>
    <button id="closeMsgBtn">${buttonText}</button>
  `);
  modal.querySelector('#closeMsgBtn').onclick = () => {
    document.body.removeChild(modal);
  };
}

// === Инициализация при загрузке ===
document.addEventListener('DOMContentLoaded', () => {
  loadLanguage();
  loadTheme();
  renderCategories();

  // 🔥 КРИТИЧЕСКИ ВАЖНО: разрешить drop везде
  document.addEventListener('dragover', (e) => {
    e.preventDefault();
  });
});

// === Темы ===
function loadTheme() {
  const saved = localStorage.getItem('linkora_theme') || 'light';
  if (saved === 'custom') {
    loadCustomTheme();
  } else {
    document.body.className = `theme-${saved}`;
  }
}

function saveTheme(theme) {
  localStorage.setItem('linkora_theme', theme);
  document.body.className = `theme-${theme}`;
}

function toggleTheme() {
  const isDark = document.body.classList.contains('theme-dark');
  saveTheme(isDark ? 'light' : 'dark');
}

// === Язык ===
function loadLanguage() {
  const saved = localStorage.getItem('lang') || 'ru';
  const langSelect = document.getElementById('langSelect');
  if (langSelect) langSelect.value = saved;
}

// === Перемещение URL между категориями ===
function moveUrlBetweenCategories(urlId, fromCatId, toCatId, mode, targetUrlId = null) {
  const fromCat = categories.find(c => c.id === fromCatId);
  const toCat = categories.find(c => c.id === toCatId);
  if (!fromCat || !toCat) return;

  const urlIndex = fromCat.urls.findIndex(u => u.id === urlId);
  if (urlIndex === -1) return;

  const [url] = fromCat.urls.splice(urlIndex, 1);

  if (mode === 'end') {
    toCat.urls.push(url);
  } else if (mode === 'before' && targetUrlId) {
    const targetIndex = toCat.urls.findIndex(u => u.id === targetUrlId);
    if (targetIndex !== -1) {
      toCat.urls.splice(targetIndex, 0, url);
    } else {
      toCat.urls.push(url);
    }
  }

  saveData();
  if (viewMode === 'categories' && (currentCategoryId === fromCatId || currentCategoryId === toCatId)) {
    showUrls(currentCategoryId);
  } else if (viewMode === 'favourites') {
    showFavourites();
  }
  renderCategories();
}

// === Отображение категорий ===
function renderCategories() {
  if (viewMode === 'favourites') return;

  const container = document.getElementById('categoriesContainer');
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.style.display = 'none';
    searchInput.value = '';
  }
  const clearBtn = document.getElementById('searchClearBtn');
  if (clearBtn) clearBtn.style.display = 'none';

  container.innerHTML = '';

  if (categories.length === 0) {
    const welcomeContainer = document.createElement('div');
    welcomeContainer.style.cssText = `
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 40px;
      text-align: center;
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
    `;

    const img = document.createElement('img');
    img.src = 'assets/welcome.png';
    img.alt = 'Linkora';
    img.style.cssText = `
      max-width: 240px;
      height: auto;
      margin-bottom: 24px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    `;

    const title = document.createElement('h2');
    title.textContent = t('welcomeTitle');
    title.style.cssText = `
      font-size: 22px;
      margin: 0 0 16px;
      color: var(--text);
    `;

    const hint = document.createElement('p');
    hint.textContent = t('welcomeHint');
    hint.style.cssText = `
      font-size: 15px;
      margin: 0 0 24px;
      color: var(--text);
      opacity: 0.9;
    `;

    const btn = document.createElement('button');
    btn.textContent = t('newCategoryBtn');
    btn.onclick = createNewCategory;
    btn.className = 'category-btn';
    btn.style.cssText = `padding: 10px 20px; font-size: 16px;`;

    welcomeContainer.appendChild(img);
    welcomeContainer.appendChild(title);
    welcomeContainer.appendChild(hint);
    welcomeContainer.appendChild(btn);

    container.appendChild(welcomeContainer);
    return;
  }

  categories.forEach(cat => {
    const displayCatName = cat.name.length > 8 
      ? cat.name.substring(0, 8) + '...' 
      : cat.name;

    const btn = document.createElement('button');
    btn.textContent = displayCatName;
    btn.className = 'category-btn';
    btn.dataset.id = cat.id;
    btn.setAttribute('draggable', 'true');
    btn.title = cat.name;

    btn.onclick = () => {
      if (currentCategoryId === cat.id) {
        currentCategoryId = null;
        document.getElementById('urlsContainer').innerHTML = '';
      } else {
        showUrls(cat.id);
      }
    };

    // Drag & drop — сортировка категорий
    btn.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('application/linkora-category', cat.id);
      btn.classList.add('dragging');
    });

    btn.addEventListener('dragend', () => {
      btn.classList.remove('dragging');
      document.querySelectorAll('.category-btn.drop-before, .category-btn.drop-after')
        .forEach(el => el.classList.remove('drop-before', 'drop-after'));
    });

    btn.addEventListener('dragover', (e) => {
      e.preventDefault();
    });

    btn.addEventListener('dragenter', (e) => {
      e.preventDefault();
      document.querySelectorAll('.category-btn.drop-before, .category-btn.drop-after')
        .forEach(el => el.classList.remove('drop-before', 'drop-after'));

      const rect = btn.getBoundingClientRect();
      const mid = (rect.left + rect.right) / 2;
      if (e.clientX < mid) {
        btn.classList.add('drop-before');
      } else {
        btn.classList.add('drop-after');
      }
    });

    btn.addEventListener('drop', (e) => {
      e.preventDefault();

      // 1. Проверяем, перетаскивается ли ССЫЛКА
      const urlDataStr = e.dataTransfer.getData('application/linkora-url');
      if (urlDataStr) {
        let data;
        try { data = JSON.parse(urlDataStr); } catch { /* ignore */ }
        if (data && data.type === 'url') {
          const draggedUrlId = data.urlId;
          const fromCatId = data.fromCategoryId;
          if (fromCatId !== cat.id) {
            moveUrlBetweenCategories(draggedUrlId, fromCatId, cat.id, 'end');
          }
          return;
        }
      }

      // 2. Проверяем, перетаскивается ли КАТЕГОРИЯ
      const draggedCatId = e.dataTransfer.getData('application/linkora-category');
      if (!draggedCatId || draggedCatId === cat.id) return;

      const fromIndex = categories.findIndex(c => c.id === draggedCatId);
      let toIndex = categories.findIndex(c => c.id === cat.id);
      if (btn.classList.contains('drop-after')) {
        toIndex += 1;
      }

      const [moved] = categories.splice(fromIndex, 1);
      categories.splice(toIndex, 0, moved);
      saveData();
      renderCategories();
    });

    // Обёртка с кнопкой удаления
    const wrapper = document.createElement('div');
    wrapper.className = 'category-wrapper';

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '❌';
    deleteBtn.className = 'category-delete-btn';
    deleteBtn.onclick = (e) => {
      e.stopPropagation();
      showConfirmModal(
        t('deleteCategoryTitle'),
        t('deleteCategoryMessage').replace('{name}', cat.name),
        () => {
          categories = categories.filter(c => c.id !== cat.id);
          if (currentCategoryId === cat.id) {
            currentCategoryId = null;
          }
          saveData();
          if (viewMode === 'favourites') {
            showFavourites();
          } else {
            renderCategories();
            document.getElementById('urlsContainer').innerHTML = '';
          }
        }
      );
    };

    wrapper.appendChild(btn);
    wrapper.appendChild(deleteBtn);
    container.appendChild(wrapper);
  });

  const addBtn = document.createElement('button');
  addBtn.textContent = '➕ ' + t('addLink');
  addBtn.onclick = createNewCategory;
  addBtn.className = 'category-btn';
  addBtn.draggable = false;
  container.appendChild(addBtn);
}

// === Создание новой категории ===
function createNewCategory() {
  const modal = showModal(`
    <h3>${t('newCategoryTitle')}</h3>
    <input type="text" id="newCategoryInput" placeholder="${t('categoryNamePlaceholder')}" style="width: 100%; padding: 8px; margin: 10px 0;" />
    <div>
      <button id="saveCategoryBtn">${t('save')}</button>
      <button id="cancelCategoryBtn">${t('cancel')}</button>
    </div>
  `);

  const input = modal.querySelector('#newCategoryInput');
  input.focus();

  modal.querySelector('#saveCategoryBtn').onclick = () => {
    const name = input.value.trim();
    if (name) {
      const newCat = { id: Date.now().toString(), name, urls: [] };
      categories.push(newCat);
      saveData();
      renderCategories();
    }
    document.body.removeChild(modal);
  };

  modal.querySelector('#cancelCategoryBtn').onclick = () => {
    document.body.removeChild(modal);
  };
}

// === Показ ссылок категории ===
function showUrls(categoryId) {
  viewMode = 'categories';
  currentCategoryId = categoryId;
  document.getElementById('categoriesContainer').style.display = 'flex';
  document.getElementById('searchInput').style.display = 'inline-block';

  const cat = categories.find(c => c.id === categoryId);
  const container = document.getElementById('urlsContainer');
  container.innerHTML = '';
  if (!cat) return;

  const urlCounts = {};
  cat.urls.forEach(u => {
    urlCounts[u.url] = (urlCounts[u.url] || 0) + 1;
  });

  renderUrlCards(cat.urls, urlCounts, categoryId);
  setupSearch();
}

// === Показ избранных ===
function showFavourites() {
  viewMode = 'favourites';
  currentCategoryId = null;
  document.getElementById('categoriesContainer').style.display = 'none';
  document.getElementById('searchInput').style.display = 'inline-block';

  const favouriteUrls = [];
  const seenIds = new Set();
  const globalUrlCounts = {};

  for (const cat of categories) {
    for (const url of cat.urls) {
      globalUrlCounts[url.url] = (globalUrlCounts[url.url] || 0) + 1;
      if (url.favorite && !seenIds.has(url.id)) {
        favouriteUrls.push(url);
        seenIds.add(url.id);
      }
    }
  }

  renderUrlCards(favouriteUrls, globalUrlCounts, null);
  setupSearch();
}

// === Рендеринг карточек ===
function renderUrlCards(urlList, duplicateMap = {}, contextCategoryId = null) {
  const container = document.getElementById('urlsContainer');
  container.innerHTML = '';

  urlList.forEach(url => {
    const card = document.createElement('div');
    card.className = 'url-card';
    card.dataset.id = url.id;
    if (viewMode !== 'favourites') {
	  card.setAttribute('draggable', 'true');
	}

    const isDuplicate = duplicateMap[url.url] > 1;
    const isFavorite = url.favorite || false;

    if (isDuplicate) {
      card.style.backgroundColor = '#fff8e1';
      card.style.border = '2px solid #ffb300';
      card.style.boxShadow = '0 0 0 2px #fff8e1, 0 0 0 4px rgba(255, 179, 0, 0.3)';
    }

    const displayUrl = url.url.length > 60 ? url.url.substring(0, 57) + '...' : url.url;
    const displayDesc = url.description
      ? (url.description.length > 28 ? url.description.substring(0, 25) + '...' : url.description)
      : '';

    const linkColor = isFavorite ? '#d32f2f' : 'var(--accent)';
    const starColor = isFavorite ? '#ff0000' : '#FFD700';
    const starSymbol = '★';

    card.innerHTML = `
      <div style="position: relative;">
        <button class="favorite-btn" style="color: ${starColor};">${starSymbol}</button>
        <a href="${url.url}" target="_blank" style="color: ${linkColor};" title="${url.url}">
          ${displayUrl}
        </a>
        ${displayDesc ? `<p title="${url.description}">${displayDesc}</p>` : ''}
      </div>
    `;

    const favBtn = card.querySelector('.favorite-btn');
    favBtn.onclick = (e) => {
      e.stopPropagation();
      url.favorite = !url.favorite;
      saveData();
      if (viewMode === 'favourites') {
        showFavourites();
      } else {
        showUrls(contextCategoryId);
      }
    };

	// Drag & drop — только в режиме категории
	if (viewMode !== 'favourites' && contextCategoryId) {
	  card.addEventListener('dragstart', (e) => {
		e.dataTransfer.setData('application/linkora-url', JSON.stringify({
		  type: 'url',
		  urlId: url.id,
		  fromCategoryId: contextCategoryId
		}));
		card.classList.add('dragging-url');
		// ❌ УДАЛИ эту строку:
		// card.style.pointerEvents = 'none';
	  });

	  card.addEventListener('dragend', () => {
		card.classList.remove('dragging-url');
		// ❌ И эту:
		// card.style.pointerEvents = '';
		document.querySelectorAll('.drop-between')
		  .forEach(el => el.classList.remove('drop-between'));
	  });

	  card.addEventListener('dragover', (e) => e.preventDefault());

	  card.addEventListener('dragenter', (e) => {
		e.preventDefault();
		document.querySelectorAll('.drop-between').forEach(el => el.classList.remove('drop-between'));
		card.classList.add('drop-between');
	  });

	  card.addEventListener('drop', (e) => {
		e.preventDefault();
		const dataStr = e.dataTransfer.getData('application/linkora-url');
		if (!dataStr) return;

		let data;
		try { data = JSON.parse(dataStr); } catch { return; }
		if (!data || data.type !== 'url') return;

		const draggedUrlId = data.urlId;
		const fromCatId = data.fromCategoryId;
		if (draggedUrlId === url.id && fromCatId === contextCategoryId) return;

		moveUrlBetweenCategories(draggedUrlId, fromCatId, contextCategoryId, 'before', url.id);
	  });
	}

    // Всплывающее окно
    card.addEventListener('mouseenter', (e) => {
      if (!url.screenshot && !url.description) return;

      if (activePopover) {
        document.body.removeChild(activePopover);
        activePopover = null;
      }

      activePopover = document.createElement('div');
      activePopover.style.cssText = `
        position: fixed;
        top: ${e.clientY + 10}px;
        left: ${e.clientX + 10}px;
        background: var(--card-bg);
        border: 1px solid var(--border);
        border-radius: 8px;
        padding: 12px;
        max-width: 400px;
        z-index: 10000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        font-size: 14px;
        pointer-events: none;
      `;

      let content = '';
      if (url.screenshot) {
        content += `<img src="${url.screenshot}" style="max-width: 100%; border-radius: 4px; margin-bottom: 8px;">`;
      }
      if (url.description) {
        content += `<p style="margin: 0; color: var(--text);">${url.description}</p>`;
      }
      activePopover.innerHTML = content;
      document.body.appendChild(activePopover);
    });

    card.addEventListener('mouseleave', () => {
      if (activePopover) {
        document.body.removeChild(activePopover);
        activePopover = null;
      }
    });

    // Кнопки действий
    const actions = document.createElement('div');
    actions.className = 'url-actions';

    const editBtn = document.createElement('button');
    editBtn.textContent = '✏️';
    editBtn.onclick = (e) => {
      e.stopPropagation();
      openEditUrlModal(url, contextCategoryId);
    };
    actions.appendChild(editBtn);

    const screenshotBtn = document.createElement('button');
    screenshotBtn.textContent = '📸';
    screenshotBtn.onclick = (e) => {
      e.stopPropagation();
      openScreenshotModal(url, contextCategoryId);
    };
    actions.appendChild(screenshotBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '❌';
    deleteBtn.style.color = '#ff4d4d';
    deleteBtn.onclick = (e) => {
      e.stopPropagation();
      showConfirmModal(
        t('deleteLinkTitle'),
        t('deleteLinkMessage'),
        () => {
          let targetCat = null;
          for (const cat of categories) {
            const idx = cat.urls.findIndex(u => u.id === url.id);
            if (idx !== -1) {
              cat.urls.splice(idx, 1);
              targetCat = cat;
              break;
            }
          }
          if (targetCat) {
            saveData();
            if (viewMode === 'favourites') {
              showFavourites();
            } else {
              showUrls(contextCategoryId);
            }
          }
        }
      );
    };
    actions.appendChild(deleteBtn);

    card.appendChild(actions);
    container.appendChild(card);
  });

  // Кнопка "Добавить ссылку"
  if (viewMode === 'categories' && contextCategoryId) {
    const addBtn = document.createElement('button');
    addBtn.textContent = '➕ ' + t('addLink');
    addBtn.className = 'category-btn';
    addBtn.addEventListener('click', () => openAddUrlModal(contextCategoryId));
    container.appendChild(addBtn);
  }

  // Кнопка "Назад"
  if (viewMode === 'favourites') {
    const backBtn = document.createElement('button');
    backBtn.textContent = t('backToCategories');
    backBtn.onclick = () => {
      document.getElementById('categoriesContainer').style.display = 'flex';
      document.getElementById('urlsContainer').innerHTML = '';
      document.getElementById('searchInput').style.display = 'none';
      const clearBtn = document.getElementById('searchClearBtn');
      if (clearBtn) clearBtn.style.display = 'none';
    };
    backBtn.className = 'category-btn';
    backBtn.style.marginTop = '16px';
    container.appendChild(backBtn);
  }
}

// === Модальные окна ===
function openScreenshotModal(urlObj, categoryId) {
  const modal = showModal(
    `
    <h3>${t('screenshotTitle')} ${urlObj.title || urlObj.url}</h3>
    <p>${t('screenshotInstructions')}</p>
    <button id="openUrlBtn">${t('openLink')}</button>
    <button id="pasteScreenshotBtn">${t('pasteScreenshot')}</button>
    <div id="preview" style="margin-top: 10px; max-width: 300px;"></div>
    <button id="closeModalBtn">${t('close')}</button>
  `,
    (modalElement) => {
      modalElement.querySelector('#openUrlBtn').onclick = (e) => {
        e.stopPropagation();
        if (window.__TAURI__) {
          window.__TAURI__.core.invoke('plugin:shell|open', { path: urlObj.url });
        } else {
          window.open(urlObj.url, '_blank', 'noopener,noreferrer');
        }
      };

      modalElement.querySelector('#pasteScreenshotBtn').onclick = async () => {
        try {
          const clipboardItems = await navigator.clipboard.read();
          let blob = null;
          for (const item of clipboardItems) {
            if (item.types.includes('image/png')) {
              blob = await item.getType('image/png');
              break;
            }
            if (item.types.includes('image/jpeg')) {
              blob = await item.getType('image/jpeg');
              break;
            }
          }
          if (blob) {
            const reader = new FileReader();
            reader.onload = () => {
              urlObj.screenshot = reader.result;
              saveData();
              const img = document.createElement('img');
              img.src = reader.result;
              img.style.maxWidth = '100%';
              img.style.borderRadius = '4px';
              modalElement.querySelector('#preview').innerHTML = '';
              modalElement.querySelector('#preview').appendChild(img);
            };
            reader.readAsDataURL(blob);
          } else {
            showMessage(t('clipboardNoImage'));
          }
        } catch (err) {
          showMessage(t('clipboardError'));
        }
      };

      modalElement.querySelector('#closeModalBtn').onclick = () => {
        document.body.removeChild(modalElement);
      };
    }
  );
}

function openEditUrlModal(urlObj, categoryId) {
  const modal = showModal(`
    <h3>${t('editLink')}</h3>
    <input type="url" id="editUrlInput" value="${urlObj.url}" required style="width: 100%; padding: 8px; margin: 10px 0;" />
    <textarea id="editDescInput" placeholder="${t('descriptionPlaceholder')}" style="width: 100%; padding: 8px; margin: 10px 0;">${urlObj.description || ''}</textarea>
    <div>
      <button id="saveEditBtn">${t('save')}</button>
      <button id="cancelEditBtn">${t('cancel')}</button>
    </div>
  `);

  document.getElementById('saveEditBtn').onclick = () => {
    const newUrl = document.getElementById('editUrlInput').value.trim();
    const newDesc = document.getElementById('editDescInput').value.trim();
    if (!newUrl) { showMessage(t('urlRequired')); return; }
    try { new URL(newUrl); } catch { showMessage(t('invalidUrl')); return; }

    urlObj.url = newUrl;
    urlObj.title = new URL(newUrl).hostname;
    urlObj.description = newDesc;
    saveData();
    document.body.removeChild(modal);
    if (viewMode === 'favourites') {
      showFavourites();
    } else {
      showUrls(categoryId);
    }
  };

  document.getElementById('cancelEditBtn').onclick = () => {
    document.body.removeChild(modal);
  };
}

function openAddUrlModal(categoryId) {
  const modal = showModal(`
    <h3>${t('addLink')}</h3>
    <input type="url" id="urlInput" placeholder="${t('urlPlaceholder')}" style="width: 100%; padding: 8px; margin: 10px 0;" />
    <textarea id="descInput" placeholder="${t('descriptionPlaceholder')}" style="width: 100%; padding: 8px; margin: 10px 0;"></textarea>
    <div>
      <button id="saveUrlBtn">${t('save')}</button>
      <button id="cancelUrlBtn">${t('cancel')}</button>
    </div>
  `);

  document.getElementById('saveUrlBtn').onclick = () => {
    const url = document.getElementById('urlInput').value.trim();
    const desc = document.getElementById('descInput').value.trim();
    if (!url) { showMessage(t('urlRequired')); return; }
    try { new URL(url); } catch { showMessage(t('invalidUrl')); return; }

    const newUrl = {
      id: Date.now().toString(),
      url,
      title: new URL(url).hostname,
      description: desc,
      screenshot: null,
      favorite: false
    };

    const cat = categories.find(c => c.id === categoryId);
    if (cat) {
      cat.urls.push(newUrl);
      saveData();
      document.body.removeChild(modal);
      showUrls(categoryId);
    }
  };

  document.getElementById('cancelUrlBtn').onclick = () => {
    document.body.removeChild(modal);
  };
}

// === Сохранение данных ===
function saveData() {
  localStorage.setItem('linkora_categories', JSON.stringify(categories));
}

// === Поиск ===
let searchTimeout = null;

function setupSearch() {
  const searchInput = document.getElementById('searchInput');
  if (!searchInput) return;

  searchInput.removeEventListener('input', handleSearchInput);
  searchInput.addEventListener('input', handleSearchInput);

  let clearBtn = document.getElementById('searchClearBtn');
  if (!clearBtn) {
    clearBtn = document.createElement('button');
    clearBtn.id = 'searchClearBtn';
    clearBtn.innerHTML = '×';
    clearBtn.style.cssText = `
      position: absolute;
      left: 215px;
      top: 16px;
      background: none;
      border: none;
      color: var(--text);
      font-weight: bold;
      cursor: pointer;
      display: none;
      z-index: 11;
    `;
    document.body.appendChild(clearBtn);

    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      performSearch('');
      clearBtn.style.display = 'none';
    });
  }

  searchInput.addEventListener('input', () => {
    clearBtn.style.display = searchInput.value.trim() ? 'block' : 'none';
  });

  clearBtn.style.display = 'none';
}

function handleSearchInput(e) {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    performSearch(e.target.value.trim());
  }, 300);
}

function performSearch(query) {
  if (viewMode === 'categories' && currentCategoryId) {
    const cat = categories.find(c => c.id === currentCategoryId);
    if (!cat) return;
    const urlCounts = {};
    cat.urls.forEach(u => urlCounts[u.url] = (urlCounts[u.url] || 0) + 1);
    const filtered = query
      ? cat.urls.filter(u => (u.url + ' ' + (u.description || '')).toLowerCase().includes(query.toLowerCase()))
      : cat.urls;
    renderUrlCards(filtered, urlCounts, currentCategoryId);
  } else if (viewMode === 'favourites') {
    const globalUrlCounts = {};
    for (const cat of categories) {
      for (const url of cat.urls) {
        globalUrlCounts[url.url] = (globalUrlCounts[url.url] || 0) + 1;
      }
    }
    const allFavs = [];
    const seen = new Set();
    for (const cat of categories) {
      for (const url of cat.urls) {
        if (url.favorite && !seen.has(url.id)) {
          allFavs.push(url);
          seen.add(url.id);
        }
      }
    }
    const filtered = query
      ? allFavs.filter(u => (u.url + ' ' + (u.description || '')).toLowerCase().includes(query.toLowerCase()))
      : allFavs;
    renderUrlCards(filtered, globalUrlCounts, null);
  }
}

// === Экспорт / Импорт ===
function setupExportImport() {
  const exportDataBtn = document.getElementById('exportDataBtn');
  const importDataBtn = document.getElementById('importDataBtn');

  if (exportDataBtn) {
    exportDataBtn.addEventListener('click', () => {
      exportData();
    });
  }

  if (importDataBtn) {
    importDataBtn.addEventListener('click', () => {
      importData();
    });
  }

  document.getElementById('importFileInput')?.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target.result);
        if (!Array.isArray(parsed)) {
          throw new Error('Неверный формат');
        }

        showConfirmModal(
          t('importWarningTitle'),
          t('importWarningMessage'),
          () => {
            localStorage.setItem('linkora_categories', JSON.stringify(parsed));
            showMessage(t('importSuccess'));
            setTimeout(() => location.reload(), 1000);
          }
        );
      } catch (err) {
        showMessage(t('importError'));
        console.error(err);
      } finally {
        e.target.value = '';
      }
    };
    reader.readAsText(file);
  });
}

function exportData() {
  const dataStr = localStorage.getItem('linkora_categories');
  if (!dataStr || dataStr === '[]') {
    showMessage(t('noDataToExport'));
    return;
  }

  const blob = new Blob([dataStr], { type: 'application/json;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'linkora-backup.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function importData() {
  const fileInput = document.getElementById('importFileInput');
  fileInput.click();
}

// === Кастомная тема ===
function applyCustomTheme(hexColor) {
  const isDark = isColorDark(hexColor);
  const textColor = isDark ? '#ffffff' : '#000000';
  const cardBg = isDark ? darkenColor(hexColor, 10) : lightenColor(hexColor, 15);
  const borderColor = isDark ? lightenColor(hexColor, 20) : darkenColor(hexColor, 15);

  document.body.classList.remove('theme-light', 'theme-dark');
  document.body.classList.add('theme-custom');

  document.documentElement.style.setProperty('--custom-bg', hexColor);
  document.documentElement.style.setProperty('--custom-text', textColor);
  document.documentElement.style.setProperty('--custom-card-bg', cardBg);
  document.documentElement.style.setProperty('--custom-border', borderColor);

  localStorage.setItem('linkora_theme', 'custom');
  localStorage.setItem('linkora_custom_color', hexColor);
}

function loadCustomTheme() {
  const color = localStorage.getItem('linkora_custom_color') || '#4a6cf7';
  applyCustomTheme(color);
}

function isColorDark(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const brightness = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return brightness < 0.5;
}

function lightenColor(hex, percent) {
  return adjustColor(hex, percent);
}
function darkenColor(hex, percent) {
  return adjustColor(hex, -percent);
}
function adjustColor(hex, percent) {
  let r = parseInt(hex.slice(1, 3), 16);
  let g = parseInt(hex.slice(3, 5), 16);
  let b = parseInt(hex.slice(5, 7), 16);

  r = Math.min(255, Math.max(0, r + (r * percent) / 100));
  g = Math.min(255, Math.max(0, g + (g * percent) / 100));
  b = Math.min(255, Math.max(0, b + (b * percent) / 100));

  return `#${Math.round(r).toString(16).padStart(2, '0')}${Math.round(g).toString(16).padStart(2, '0')}${Math.round(b).toString(16).padStart(2, '0')}`;
}

function rgbToHex(rgb) {
  if (!rgb || rgb.startsWith('#')) return rgb;
  const match = rgb.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (!match) return null;
  const [, r, g, b] = match;
  return `#${(+r).toString(16).padStart(2, '0')}${(+g).toString(16).padStart(2, '0')}${(+b).toString(16).padStart(2, '0')}`;
}

function openColorPicker() {
  const colorPicker = document.getElementById('colorPicker');
  if (colorPicker) {
    const currentBg = getComputedStyle(document.body).getPropertyValue('--bg').trim();
    colorPicker.value = rgbToHex(currentBg) || '#4a6cf7';
    colorPicker.click();
    colorPicker.addEventListener('input', (e) => {
      applyCustomTheme(e.target.value);
    }, { once: true });
  }
}

// Убедимся, что UI текст актуален
if (typeof updateUIText === 'function') {
  updateUIText();
}