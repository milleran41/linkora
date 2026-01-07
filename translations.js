const translations = {
  en: {
    appName: 'Linkora',
    addLink: 'Add link',
    searchPlaceholder: 'Search links or tags...',
    searchPlaceholderShort: 'Search',
    noLinks: 'No links yet.',
    noMatches: 'No matches found.',
    clearAll: 'Clear all',
    openInNewTab: 'Open in new tab',
    deleteLink: 'Delete link',
    toggleFavourite: 'Toggle favourite',
    editLink: 'Edit link',
    copyUrl: 'Copy URL',
    copied: 'Copied!',
    fullInstruction: `<ul>
      <li>Click “+ New category” to create your first category.</li>
      <li>Then click the added category and “➕ Add link” to save a bookmark.</li>
      <li>Drag links to reorder them within a category.</li>
      <li>To move a link to another category, drag it onto the desired category.</li>
      <li>Click the star ★ to add a link to favourites.</li>
      <li>Use the search bar to quickly find links or tags.</li>
      <li>To open a link — simply click on it.</li>
      <li>Edit or delete links using the buttons in the link’s own menu (✏️ and ❌).</li>
    </ul>`,
    aboutTitle: 'About Linkora',
    aboutContent: 'Linkora is a lightweight, open-source bookmark manager for power users.',
    guideTitle: 'User Guide',
    exportData: 'Export data',
    importData: 'Import data',
    toggleTheme: 'Toggle theme',
    openColorPicker: 'Custom theme',
    showFavourites: 'Show favourites only',
    menuLabel: 'Menu',
    close: 'Close',
    save: 'Save',
    cancel: 'Cancel',
    copyBtn: 'Copy',
    version: 'Version',
    backToCategories: '← Back to categories',

    // Screenshot modal
    screenshotTitle: 'Screenshot for:',
    screenshotInstructions: `1. Click the button below to open the link.<br>2. Take a screenshot (e.g., Win+Shift+S).<br>3. Return and click “Paste screenshot”.`,
    openLink: 'Open link',
    pasteScreenshot: 'Paste screenshot from clipboard',

    // Menu
    about: 'About',
    instruction: 'User Guide',

    // Welcome screen
    welcomeTitle: 'Welcome to Linkora!',
    welcomeHint: 'Click the button below to create your first category.',
    newCategoryBtn: '+ New category',

    // Contact
    contactTitle: 'Contact',
    contactInstructions: 'For questions about improving the app or adding missing interface languages, please write to the author:',

    // Ad panel — ONLY support, no Pro
    adSupportTitle: 'Support the project',
    adSupportDesc: 'Your donations help keep Linkora free and open-source.',
    adGuideTitle: 'Need help?',
    adGuideDesc: 'Read the quick guide to get started.',

    // 🔹 NEW: Donation modal
    supportProject: 'Support the Project',
    donateAnyAmount: 'Any amount helps!',
    donateThankYou: 'Thank you for your support!',

    // 🔹 NEW: General UI
    yes: 'Yes',
    no: 'No',

    // 🔹 NEW: Category
    newCategoryTitle: 'New Category',
    categoryNamePlaceholder: 'Category name',

    // 🔹 NEW: Delete confirmations
    deleteCategoryTitle: 'Delete category?',
    deleteCategoryMessage: 'Delete category “{name}” and all its links?',
    deleteLinkTitle: 'Delete link?',
    deleteLinkMessage: 'Are you sure you want to delete this link?',

    // 🔹 NEW: URL form
    urlRequired: 'Please enter a URL.',
    invalidUrl: 'Invalid URL.',
    urlPlaceholder: 'https://example.com',
    descriptionPlaceholder: 'Description (optional)',

    // 🔹 NEW: Clipboard
    clipboardNoImage: 'No image found in clipboard.',
    clipboardError: 'Failed to access clipboard. Try manually.',

    // 🔹 NEW: Import/Export
    importWarningTitle: 'Warning!',
    importWarningMessage: 'All current data will be replaced. Continue?',
    importSuccess: 'Data imported successfully!',
    importError: 'Error: invalid file format.',
    noDataToExport: 'No data to export.'
  },
  ru: {
    appName: 'Linkora',
    addLink: 'Добавить ссылку',
    searchPlaceholder: 'Поиск ссылок или тегов...',
    searchPlaceholderShort: 'Поиск',
    noLinks: 'Пока нет ссылок.',
    noMatches: 'Ничего не найдено.',
    clearAll: 'Очистить всё',
    openInNewTab: 'Открыть в новой вкладке',
    deleteLink: 'Удалить ссылку',
    toggleFavourite: 'В избранное / удалить',
    editLink: 'Редактировать',
    copyUrl: 'Копировать URL',
    copied: 'Скопировано!',
    fullInstruction: `<ul>
      <li>Нажмите «+ Новая категория», чтобы создать первую категорию.</li>
      <li>После этого нажмите на добавленную категорию и «➕ Добавить ссылку», чтобы сохранить закладку.</li>
      <li>Перетаскивайте ссылки, чтобы изменить их порядок внутри категории.</li>
      <li>Чтобы переместить ссылку в другую категорию, перетащите её на нужную категорию.</li>
      <li>Нажмите на звезду ★, чтобы добавить ссылку в избранное.</li>
      <li>Используйте поиск, чтобы быстро находить ссылки или теги.</li>
      <li>Чтобы открыть ссылку — просто кликните по ней.</li>
      <li>Редактируйте или удаляйте ссылки с помощью кнопок в меню самой ссылки (✏️ и ❌).</li>
    </ul>`,
    aboutTitle: 'О Linkora',
    aboutContent: 'Linkora — это лёгкий и открытый менеджер закладок для опытных пользователей.',
    guideTitle: 'Руководство',
    exportData: 'Экспорт данных',
    importData: 'Импорт данных',
    toggleTheme: 'Сменить тему',
    openColorPicker: 'Цветовая тема',
    showFavourites: 'Только избранное',
    menuLabel: 'Меню',
    close: 'Закрыть',
    save: 'Сохранить',
    cancel: 'Отмена',
    copyBtn: 'Копировать',
    version: 'Версия',
    backToCategories: '← Назад к категориям',

    // Screenshot modal
    screenshotTitle: 'Скриншот для:',
    screenshotInstructions: `1. Нажмите кнопку ниже, чтобы открыть ссылку.<br>2. Сделайте скриншот (например, Win+Shift+S).<br>3. Вернитесь и нажмите «Вставить скриншот».`,
    openLink: 'Открыть ссылку',
    pasteScreenshot: 'Вставить скриншот из буфера',

    // Menu
    about: 'О программе',
    instruction: 'Инструкция',

    // Welcome screen
    welcomeTitle: 'Добро пожаловать в Linkora!',
    welcomeHint: 'Нажмите кнопку ниже, чтобы создать первую категорию.',
    newCategoryBtn: '+ Новая категория',

    // Contact
    contactTitle: 'Обратная связь',
    contactInstructions: 'По вопросам улучшения программы и добавления недостающих языков интерфейса напишите автору:',

    // Ad panel — ONLY support, no Pro
    adSupportTitle: 'Поддержите проект',
    adSupportDesc: 'Ваши пожертвования помогают делать Linkora бесплатным и открытым.',
    adGuideTitle: 'Нужна помощь?',
    adGuideDesc: 'Прочтите краткое руководство.',

    // 🔹 NEW: Donation modal
    supportProject: 'Поддержать проект',
    donateAnyAmount: 'Любая сумма помогает!',
    donateThankYou: 'Спасибо за поддержку!',

    // 🔹 NEW: General UI
    yes: 'Да',
    no: 'Нет',

    // 🔹 NEW: Category
    newCategoryTitle: 'Новая категория',
    categoryNamePlaceholder: 'Название категории',

    // 🔹 NEW: Delete confirmations
    deleteCategoryTitle: 'Удалить категорию?',
    deleteCategoryMessage: 'Удалить категорию «{name}» и все её ссылки?',
    deleteLinkTitle: 'Удалить ссылку?',
    deleteLinkMessage: 'Вы уверены, что хотите удалить эту ссылку?',

    // 🔹 NEW: URL form
    urlRequired: 'Пожалуйста, введите URL.',
    invalidUrl: 'Некорректный URL.',
    urlPlaceholder: 'https://example.com',
    descriptionPlaceholder: 'Описание (необязательно)',

    // 🔹 NEW: Clipboard
    clipboardNoImage: 'Изображение не найдено в буфере обмена.',
    clipboardError: 'Не удалось получить доступ к буферу обмена. Попробуйте вручную.',

    // 🔹 NEW: Import/Export
    importWarningTitle: 'Внимание!',
    importWarningMessage: 'Все текущие данные будут заменены. Продолжить?',
    importSuccess: 'Данные успешно импортированы!',
    importError: 'Ошибка: неверный формат файла.',
    noDataToExport: 'Нет данных для экспорта.'
  },
  es: {
    appName: 'Linkora',
    addLink: 'Añadir enlace',
    searchPlaceholder: 'Buscar enlaces o etiquetas...',
    searchPlaceholderShort: 'Buscar',
    noLinks: 'Aún no hay enlaces.',
    noMatches: 'No se encontraron coincidencias.',
    clearAll: 'Borrar todo',
    openInNewTab: 'Abrir en nueva pestaña',
    deleteLink: 'Eliminar enlace',
    toggleFavourite: 'Favorito / eliminar',
    editLink: 'Editar enlace',
    copyUrl: 'Copiar URL',
    copied: '¡Copiado!',
    fullInstruction: `<ul>
      <li>Haga clic en «+ Nueva categoría» para crear su primera categoría.</li>
      <li>Luego haga clic en la categoría añadida y en «➕ Añadir enlace» para guardar un marcador.</li>
      <li>Arrastre enlaces para reordenarlos dentro de una categoría.</li>
      <li>Para mover un enlace a otra categoría, arrástrelo sobre la categoría deseada.</li>
      <li>Haga clic en la estrella ★ para añadir un enlace a favoritos.</li>
      <li>Use la barra de búsqueda para encontrar rápidamente enlaces o etiquetas.</li>
      <li>Para abrir un enlace, simplemente haga clic en él.</li>
      <li>Edite o elimine enlaces usando los botones del menú del propio enlace (✏️ y ❌).</li>
    </ul>`,
    aboutTitle: 'Acerca de Linkora',
    aboutContent: 'Linkora es un gestor de marcadores ligero y de código abierto para usuarios avanzados.',
    guideTitle: 'Guía de usuario',
    exportData: 'Exportar datos',
    importData: 'Importar datos',
    toggleTheme: 'Cambiar tema',
    openColorPicker: 'Tema personalizado',
    showFavourites: 'Solo favoritos',
    menuLabel: 'Menú',
    close: 'Cerrar',
    save: 'Guardar',
    cancel: 'Cancelar',
    copyBtn: 'Copiar',
    version: 'Versión',
    backToCategories: '← Volver a categorías',

    // Screenshot modal
    screenshotTitle: 'Captura para:',
    screenshotInstructions: `1. Haga clic en el botón de abajo para abrir el enlace.<br>2. Haga una captura (p. ej., Win+Shift+S).<br>3. Vuelva y haga clic en «Pegar captura».`,
    openLink: 'Abrir enlace',
    pasteScreenshot: 'Pegar captura del portapapeles',

    // Menu
    about: 'Acerca de',
    instruction: 'Guía de usuario',

    // Welcome screen
    welcomeTitle: '¡Bienvenido a Linkora!',
    welcomeHint: 'Haga clic en el botón de abajo para crear su primera categoría.',
    newCategoryBtn: '+ Nueva categoría',

    // Contact
    contactTitle: 'Contacto',
    contactInstructions: 'Para preguntas sobre la mejora de la aplicación o la adición de idiomas faltantes en la interfaz, por favor escríbale al autor:',

    // Ad panel — ONLY support, no Pro
    adSupportTitle: 'Apoya el proyecto',
    adSupportDesc: 'Tus donaciones mantienen Linkora gratis y de código abierto.',
    adGuideTitle: '¿Necesitas ayuda?',
    adGuideDesc: 'Lee la guía rápida para comenzar.',

    // 🔹 NEW: Donation modal
    supportProject: 'Apoyar el proyecto',
    donateAnyAmount: '¡Cualquier cantidad ayuda!',
    donateThankYou: '¡Gracias por tu apoyo!',

    // 🔹 NEW: General UI
    yes: 'Sí',
    no: 'No',

    // 🔹 NEW: Category
    newCategoryTitle: 'Nueva categoría',
    categoryNamePlaceholder: 'Nombre de la categoría',

    // 🔹 NEW: Delete confirmations
    deleteCategoryTitle: '¿Eliminar categoría?',
    deleteCategoryMessage: '¿Eliminar la categoría «{name}» y todos sus enlaces?',
    deleteLinkTitle: '¿Eliminar enlace?',
    deleteLinkMessage: '¿Está seguro de que desea eliminar este enlace?',

    // 🔹 NEW: URL form
    urlRequired: 'Por favor, introduce una URL.',
    invalidUrl: 'URL no válida.',
    urlPlaceholder: 'https://ejemplo.com',
    descriptionPlaceholder: 'Descripción (opcional)',

    // 🔹 NEW: Clipboard
    clipboardNoImage: 'No se encontró ninguna imagen en el portapapeles.',
    clipboardError: 'Error al acceder al portapapeles. Intenta manualmente.',

    // 🔹 NEW: Import/Export
    importWarningTitle: '¡Advertencia!',
    importWarningMessage: 'Todos los datos actuales serán reemplazados. ¿Continuar?',
    importSuccess: '¡Datos importados con éxito!',
    importError: 'Error: formato de archivo no válido.',
    noDataToExport: 'No hay datos para exportar.'
  },
  de: {
    appName: 'Linkora',
    addLink: 'Link hinzufügen',
    searchPlaceholder: 'Links oder Tags suchen...',
    searchPlaceholderShort: 'Suche',
    noLinks: 'Noch keine Links.',
    noMatches: 'Keine Treffer gefunden.',
    clearAll: 'Alles löschen',
    openInNewTab: 'In neuem Tab öffnen',
    deleteLink: 'Link löschen',
    toggleFavourite: 'Als Favorit markieren / entfernen',
    editLink: 'Link bearbeiten',
    copyUrl: 'URL kopieren',
    copied: 'Kopiert!',
    fullInstruction: `<ul>
      <li>Klicken Sie auf „+ Neue Kategorie“, um Ihre erste Kategorie zu erstellen.</li>
      <li>Klicken Sie dann auf die hinzugefügte Kategorie und „➕ Link hinzufügen“, um ein Lesezeichen zu speichern.</li>
      <li>Ziehen Sie Links, um sie innerhalb einer Kategorie neu zu ordnen.</li>
      <li>Um einen Link in eine andere Kategorie zu verschieben, ziehen Sie ihn auf die gewünschte Kategorie.</li>
      <li>Klicken Sie auf den Stern ★, um einen Link zu den Favoriten hinzuzufügen.</li>
      <li>Verwenden Sie die Suchleiste, um Links oder Tags schnell zu finden.</li>
      <li>Um einen Link zu öffnen, klicken Sie einfach darauf.</li>
      <li>Bearbeiten oder löschen Sie Links über die Schaltflächen im Menü des jeweiligen Links (✏️ und ❌).</li>
    </ul>`,
    aboutTitle: 'Über Linkora',
    aboutContent: 'Linkora ist ein leichter, quelloffener Lesezeichen-Manager für Power-User.',
    guideTitle: 'Benutzerhandbuch',
    exportData: 'Daten exportieren',
    importData: 'Daten importieren',
    toggleTheme: 'Design wechseln',
    openColorPicker: 'Benutzerdefiniertes Design',
    showFavourites: 'Nur Favoriten',
    menuLabel: 'Menü',
    close: 'Schließen',
    save: 'Speichern',
    cancel: 'Abbrechen',
    copyBtn: 'Kopieren',
    version: 'Version',
    backToCategories: '← Zurück zu Kategorien',

    // Screenshot modal
    screenshotTitle: 'Screenshot für:',
    screenshotInstructions: `1. Klicken Sie unten auf die Schaltfläche, um den Link zu öffnen.<br>2. Machen Sie einen Screenshot (z. B. mit Win+Shift+S).<br>3. Kehren Sie zurück und klicken Sie auf „Screenshot einfügen“.`,
    openLink: 'Link öffnen',
    pasteScreenshot: 'Screenshot aus Zwischenablage einfügen',

    // Menu
    about: 'Über',
    instruction: 'Benutzerhandbuch',

    // Welcome screen
    welcomeTitle: 'Willkommen bei Linkora!',
    welcomeHint: 'Klicken Sie auf die Schaltfläche unten, um Ihre erste Kategorie zu erstellen.',
    newCategoryBtn: '+ Neue Kategorie',

    // Contact
    contactTitle: 'Kontakt',
    contactInstructions: 'Bei Fragen zur Verbesserung der App oder zum Hinzufügen fehlender Sprachen schreiben Sie bitte dem Autor:',

    // Ad panel — ONLY support, no Pro
    adSupportTitle: 'Unterstütze das Projekt',
    adSupportDesc: 'Deine Spenden helfen, Linkora kostenlos und Open Source zu halten.',
    adGuideTitle: 'Brauchst du Hilfe?',
    adGuideDesc: 'Lies die Kurzanleitung für den Einstieg.',

    // 🔹 NEW: Donation modal
    supportProject: 'Projekt unterstützen',
    donateAnyAmount: 'Jeder Betrag hilft!',
    donateThankYou: 'Danke für deine Unterstützung!',

    // 🔹 NEW: General UI
    yes: 'Ja',
    no: 'Nein',

    // 🔹 NEW: Category
    newCategoryTitle: 'Neue Kategorie',
    categoryNamePlaceholder: 'Kategoriename',

    // 🔹 NEW: Delete confirmations
    deleteCategoryTitle: 'Kategorie löschen?',
    deleteCategoryMessage: 'Kategorie „{name}“ und alle ihre Links löschen?',
    deleteLinkTitle: 'Link löschen?',
    deleteLinkMessage: 'Möchten Sie diesen Link wirklich löschen?',

    // 🔹 NEW: URL form
    urlRequired: 'Bitte geben Sie eine URL ein.',
    invalidUrl: 'Ungültige URL.',
    urlPlaceholder: 'https://beispiel.de',
    descriptionPlaceholder: 'Beschreibung (optional)',

    // 🔹 NEW: Clipboard
    clipboardNoImage: 'Kein Bild in Zwischenablage gefunden.',
    clipboardError: 'Fehler beim Zugriff auf Zwischenablage. Manuell versuchen.',

    // 🔹 NEW: Import/Export
    importWarningTitle: 'Warnung!',
    importWarningMessage: 'Alle aktuellen Daten werden ersetzt. Fortfahren?',
    importSuccess: 'Daten erfolgreich importiert!',
    importError: 'Fehler: ungültiges Dateiformat.',
    noDataToExport: 'Keine Daten zum Exportieren.'
  },
  fr: {
    appName: 'Linkora',
    addLink: 'Ajouter un lien',
    searchPlaceholder: 'Rechercher des liens ou tags...',
    searchPlaceholderShort: 'Rechercher',
    noLinks: 'Aucun lien pour l’instant.',
    noMatches: 'Aucun résultat trouvé.',
    clearAll: 'Tout effacer',
    openInNewTab: 'Ouvrir dans un nouvel onglet',
    deleteLink: 'Supprimer le lien',
    toggleFavourite: 'Ajouter / supprimer des favoris',
    editLink: 'Modifier le lien',
    copyUrl: 'Copier l’URL',
    copied: 'Copié !',
    fullInstruction: `<ul>
      <li>Cliquez sur « + Nouvelle catégorie » pour créer votre première catégorie.</li>
      <li>Ensuite, cliquez sur la catégorie ajoutée et sur « ➕ Ajouter un lien » pour enregistrer un signet.</li>
      <li>Faites glisser les liens pour les réorganiser au sein d’une catégorie.</li>
      <li>Pour déplacer un lien vers une autre catégorie, faites-le glisser sur la catégorie souhaitée.</li>
      <li>Cliquez sur l’étoile ★ pour ajouter un lien aux favoris.</li>
      <li>Utilisez la barre de recherche pour trouver rapidement des liens ou des tags.</li>
      <li>Pour ouvrir un lien, cliquez simplement dessus.</li>
      <li>Modifiez ou supprimez les liens à l’aide des boutons dans le menu du lien lui-même (✏️ et ❌).</li>
    </ul>`,
    aboutTitle: 'À propos de Linkora',
    aboutContent: 'Linkora est un gestionnaire de favoris léger et open source pour les utilisateurs avancés.',
    guideTitle: 'Guide utilisateur',
    exportData: 'Exporter les données',
    importData: 'Importer les données',
    toggleTheme: 'Changer de thème',
    openColorPicker: 'Thème personnalisé',
    showFavourites: 'Afficher uniquement les favoris',
    menuLabel: 'Menu',
    close: 'Fermer',
    save: 'Enregistrer',
    cancel: 'Annuler',
    copyBtn: 'Copier',
    version: 'Version',
    backToCategories: '← Retour aux catégories',

    // Screenshot modal
    screenshotTitle: 'Capture pour :',
    screenshotInstructions: `1. Cliquez sur le bouton ci-dessous pour ouvrir le lien.<br>2. Prenez une capture d’écran (ex. : Win+Shift+S).<br>3. Revenez et cliquez sur « Coller la capture ».`,
    openLink: 'Ouvrir le lien',
    pasteScreenshot: 'Coller la capture depuis le presse-papiers',

    // Menu
    about: 'À propos',
    instruction: 'Guide utilisateur',

    // Welcome screen
    welcomeTitle: 'Bienvenue dans Linkora !',
    welcomeHint: 'Cliquez sur le bouton ci-dessous pour créer votre première catégorie.',
    newCategoryBtn: '+ Nouvelle catégorie',

    // Contact
    contactTitle: 'Contact',
    contactInstructions: 'Pour toute question concernant l’amélioration de l’application ou l’ajout de langues manquantes, veuillez écrire à l’auteur :',

    // Ad panel — ONLY support, no Pro
    adSupportTitle: 'Soutenez le projet',
    adSupportDesc: 'Vos dons aident à maintenir Linkora gratuit et open source.',
    adGuideTitle: 'Besoin d’aide ?',
    adGuideDesc: 'Lisez le guide rapide pour commencer.',

    // 🔹 NEW: Donation modal
    supportProject: 'Soutenir le projet',
    donateAnyAmount: 'Tout montant aide !',
    donateThankYou: 'Merci pour votre soutien !',

    // 🔹 NEW: General UI
    yes: 'Oui',
    no: 'Non',

    // 🔹 NEW: Category
    newCategoryTitle: 'Nouvelle catégorie',
    categoryNamePlaceholder: 'Nom de la catégorie',

    // 🔹 NEW: Delete confirmations
    deleteCategoryTitle: 'Supprimer la catégorie ?',
    deleteCategoryMessage: 'Supprimer la catégorie « {name} » et tous ses liens ?',
    deleteLinkTitle: 'Supprimer le lien ?',
    deleteLinkMessage: 'Êtes-vous sûr de vouloir supprimer ce lien ?',

    // 🔹 NEW: URL form
    urlRequired: 'Veuillez saisir une URL.',
    invalidUrl: 'URL invalide.',
    urlPlaceholder: 'https://exemple.fr',
    descriptionPlaceholder: 'Description (facultatif)',

    // 🔹 NEW: Clipboard
    clipboardNoImage: 'Aucune image trouvée dans le presse-papiers.',
    clipboardError: 'Échec d’accès au presse-papiers. Essayez manuellement.',

    // 🔹 NEW: Import/Export
    importWarningTitle: 'Attention !',
    importWarningMessage: 'Toutes les données actuelles seront remplacées. Continuer ?',
    importSuccess: 'Données importées avec succès !',
    importError: 'Erreur : format de fichier invalide.',
    noDataToExport: 'Aucune donnée à exporter.'
  },
  pt: {
    appName: 'Linkora',
    addLink: 'Adicionar link',
    searchPlaceholder: 'Pesquisar links ou tags...',
    searchPlaceholderShort: 'Pesquisar',
    noLinks: 'Nenhum link ainda.',
    noMatches: 'Nenhum resultado encontrado.',
    clearAll: 'Limpar tudo',
    openInNewTab: 'Abrir em nova aba',
    deleteLink: 'Excluir link',
    toggleFavourite: 'Favoritar / remover',
    editLink: 'Editar link',
    copyUrl: 'Copiar URL',
    copied: 'Copiado!',
    fullInstruction: `<ul>
      <li>Clique em «+ Nova categoria» para criar sua primeira categoria.</li>
      <li>Depois, clique na categoria adicionada e em «➕ Adicionar link» para salvar um marcador.</li>
      <li>Arraste os links para reordená-los dentro de uma categoria.</li>
      <li>Para mover um link para outra categoria, arraste-o até a categoria desejada.</li>
      <li>Clique na estrela ★ para adicionar um link aos favoritos.</li>
      <li>Use a barra de busca para encontrar rapidamente links ou tags.</li>
      <li>Para abrir um link, basta clicar nele.</li>
      <li>Edite ou exclua links usando os botões no menu próprio do link (✏️ e ❌).</li>
    </ul>`,
    aboutTitle: 'Sobre o Linkora',
    aboutContent: 'Linkora é um gerenciador de favoritos leve e de código aberto para usuários avançados.',
    guideTitle: 'Guia do usuário',
    exportData: 'Exportar dados',
    importData: 'Importar dados',
    toggleTheme: 'Alternar tema',
    openColorPicker: 'Tema personalizado',
    showFavourites: 'Apenas favoritos',
    menuLabel: 'Menu',
    close: 'Fechar',
    save: 'Salvar',
    cancel: 'Cancelar',
    copyBtn: 'Copiar',
    version: 'Versão',
    backToCategories: '← Voltar às categorias',

    // Screenshot modal
    screenshotTitle: 'Captura para:',
    screenshotInstructions: `1. Clique no botão abaixo para abrir o link.<br>2. Faça uma captura (ex: Win+Shift+S).<br>3. Volte e clique em «Colar captura».`,
    openLink: 'Abrir link',
    pasteScreenshot: 'Colar captura da área de transferência',

    // Menu
    about: 'Sobre',
    instruction: 'Guia do usuário',

    // Welcome screen
    welcomeTitle: 'Bem-vindo ao Linkora!',
    welcomeHint: 'Clique no botão abaixo para criar sua primeira categoria.',
    newCategoryBtn: '+ Nova categoria',

    // Contact
    contactTitle: 'Contato',
    contactInstructions: 'Para perguntas sobre a melhoria do aplicativo ou adição de idiomas ausentes na interface, por favor escreva ao autor:',

    // Ad panel — ONLY support, no Pro
    adSupportTitle: 'Apoie o projeto',
    adSupportDesc: 'Suas doações mantêm o Linkora gratuito e de código aberto.',
    adGuideTitle: 'Precisa de ajuda?',
    adGuideDesc: 'Leia o guia rápido para começar.',

    // 🔹 NEW: Donation modal
    supportProject: 'Apoiar o projeto',
    donateAnyAmount: 'Qualquer valor ajuda!',
    donateThankYou: 'Obrigado pelo seu apoio!',

    // 🔹 NEW: General UI
    yes: 'Sim',
    no: 'Não',

    // 🔹 NEW: Category
    newCategoryTitle: 'Nova categoria',
    categoryNamePlaceholder: 'Nome da categoria',

    // 🔹 NEW: Delete confirmations
    deleteCategoryTitle: 'Excluir categoria?',
    deleteCategoryMessage: 'Excluir a categoria «{name}» e todos os seus links?',
    deleteLinkTitle: 'Excluir link?',
    deleteLinkMessage: 'Tem certeza de que deseja excluir este link?',

    // 🔹 NEW: URL form
    urlRequired: 'Por favor, insira uma URL.',
    invalidUrl: 'URL inválida.',
    urlPlaceholder: 'https://exemplo.com.br',
    descriptionPlaceholder: 'Descrição (opcional)',

    // 🔹 NEW: Clipboard
    clipboardNoImage: 'Nenhuma imagem encontrada na área de transferência.',
    clipboardError: 'Falha ao acessar a área de transferência. Tente manualmente.',

    // 🔹 NEW: Import/Export
    importWarningTitle: 'Aviso!',
    importWarningMessage: 'Todos os dados atuais serão substituídos. Continuar?',
    importSuccess: 'Dados importados com sucesso!',
    importError: 'Erro: formato de arquivo inválido.',
    noDataToExport: 'Nenhum dado para exportar.'
  },
  it: {
    appName: 'Linkora',
    addLink: 'Aggiungi link',
    searchPlaceholder: 'Cerca link o tag...',
    searchPlaceholderShort: 'Cerca',
    noLinks: 'Nessun link ancora.',
    noMatches: 'Nessun risultato trovato.',
    clearAll: 'Cancella tutto',
    openInNewTab: 'Apri in una nuova scheda',
    deleteLink: 'Elimina link',
    toggleFavourite: 'Aggiungi / rimuovi dai preferiti',
    editLink: 'Modifica link',
    copyUrl: 'Copia URL',
    copied: 'Copiato!',
    fullInstruction: `<ul>
      <li>Fai clic su «+ Nuova categoria» per creare la tua prima categoria.</li>
      <li>Poi fai clic sulla categoria aggiunta e su «➕ Aggiungi link» per salvare un segnalibro.</li>
      <li>Trascina i link per riordinarli all’interno di una categoria.</li>
      <li>Per spostare un link in un’altra categoria, trascinalo sulla categoria desiderata.</li>
      <li>Fai clic sulla stella ★ per aggiungere un link ai preferiti.</li>
      <li>Usa la barra di ricerca per trovare rapidamente link o tag.</li>
      <li>Per aprire un link, fai semplicemente clic su di esso.</li>
      <li>Modifica o elimina i link usando i pulsanti nel menu del link stesso (✏️ e ❌).</li>
    </ul>`,
    aboutTitle: 'Informazioni su Linkora',
    aboutContent: 'Linkora è un gestore di segnalibri leggero e open source per utenti esperti.',
    guideTitle: 'Guida utente',
    exportData: 'Esporta dati',
    importData: 'Importa dati',
    toggleTheme: 'Cambia tema',
    openColorPicker: 'Tema personalizzato',
    showFavourites: 'Solo preferiti',
    menuLabel: 'Menu',
    close: 'Chiudi',
    save: 'Salva',
    cancel: 'Annulla',
    copyBtn: 'Copia',
    version: 'Versione',
    backToCategories: '← Torna alle categorie',

    // Screenshot modal
    screenshotTitle: 'Screenshot per:',
    screenshotInstructions: `1. Fai clic sul pulsante qui sotto per aprire il link.<br>2. Fai uno screenshot (es. Win+Shift+S).<br>3. Torna e fai clic su «Incolla screenshot».`,
    openLink: 'Apri link',
    pasteScreenshot: 'Incolla screenshot dagli appunti',

    // Menu
    about: 'Informazioni',
    instruction: 'Guida utente',

    // Welcome screen
    welcomeTitle: 'Benvenuto in Linkora!',
    welcomeHint: 'Fai clic sul pulsante qui sotto per creare la tua prima categoria.',
    newCategoryBtn: '+ Nuova categoria',

    // Contact
    contactTitle: 'Contatti',
    contactInstructions: 'Per domande sul miglioramento dell’app o sull’aggiunta di lingue mancanti, scrivi all’autore:',

    // Ad panel — ONLY support, no Pro
    adSupportTitle: 'Supporta il progetto',
    adSupportDesc: 'Le tue donazioni mantengono Linkora gratuito e open source.',
    adGuideTitle: 'Hai bisogno di aiuto?',
    adGuideDesc: 'Leggi la guida rapida per iniziare.',

    // 🔹 NEW: Donation modal
    supportProject: 'Supporta il progetto',
    donateAnyAmount: 'Qualsiasi importo aiuta!',
    donateThankYou: 'Grazie per il tuo supporto!',

    // 🔹 NEW: General UI
    yes: 'Sì',
    no: 'No',

    // 🔹 NEW: Category
    newCategoryTitle: 'Nuova categoria',
    categoryNamePlaceholder: 'Nome della categoria',

    // 🔹 NEW: Delete confirmations
    deleteCategoryTitle: 'Eliminare la categoria?',
    deleteCategoryMessage: 'Eliminare la categoria «{name}» e tutti i suoi link?',
    deleteLinkTitle: 'Eliminare il link?',
    deleteLinkMessage: 'Sei sicuro di voler eliminare questo link?',

    // 🔹 NEW: URL form
    urlRequired: 'Inserisci un URL.',
    invalidUrl: 'URL non valido.',
    urlPlaceholder: 'https://esempio.it',
    descriptionPlaceholder: 'Descrizione (opzionale)',

    // 🔹 NEW: Clipboard
    clipboardNoImage: 'Nessuna immagine trovata negli appunti.',
    clipboardError: 'Impossibile accedere agli appunti. Prova manualmente.',

    // 🔹 NEW: Import/Export
    importWarningTitle: 'Attenzione!',
    importWarningMessage: 'Tutti i dati attuali saranno sostituiti. Continuare?',
    importSuccess: 'Dati importati con successo!',
    importError: 'Errore: formato file non valido.',
    noDataToExport: 'Nessun dato da esportare.'
  },
  zh: {
    appName: 'Linkora',
    addLink: '添加链接',
    searchPlaceholder: '搜索链接或标签...',
    searchPlaceholderShort: '搜索',
    noLinks: '暂无链接。',
    noMatches: '未找到匹配项。',
    clearAll: '全部清除',
    openInNewTab: '在新标签页中打开',
    deleteLink: '删除链接',
    toggleFavourite: '收藏 / 取消收藏',
    editLink: '编辑链接',
    copyUrl: '复制链接',
    copied: '已复制！',
    fullInstruction: `<ul>
      <li>点击“+ 新建分类”以创建您的第一个分类。</li>
      <li>然后点击已添加的分类和“➕ 添加链接”以保存书签。</li>
      <li>拖动链接以调整其在分类内的顺序。</li>
      <li>要将链接移动到其他分类，请将其拖到目标分类上。</li>
      <li>点击星标 ★ 将链接添加到收藏。</li>
      <li>使用搜索栏快速查找链接或标签。</li>
      <li>要打开链接，请直接点击它。</li>
      <li>使用链接自身菜单中的按钮（✏️ 和 ❌）来编辑或删除链接。</li>
    </ul>`,
    aboutTitle: '关于 Linkora',
    aboutContent: 'Linkora 是一款轻量级、开源的书签管理器，专为高级用户打造。',
    guideTitle: '使用指南',
    exportData: '导出数据',
    importData: '导入数据',
    toggleTheme: '切换主题',
    openColorPicker: '自定义主题',
    showFavourites: '仅显示收藏',
    menuLabel: '菜单',
    close: '关闭',
    save: '保存',
    cancel: '取消',
    copyBtn: '复制',
    version: '版本',
    backToCategories: '← 返回分类',

    // Screenshot modal
    screenshotTitle: '截图用于：',
    screenshotInstructions: `1. 点击下方按钮打开链接。<br>2. 截图（例如使用 Win+Shift+S）。<br>3. 返回并点击“粘贴截图”。`,
    openLink: '打开链接',
    pasteScreenshot: '从剪贴板粘贴截图',

    // Menu
    about: '关于',
    instruction: '使用指南',

    // Welcome screen
    welcomeTitle: '欢迎使用 Linkora！',
    welcomeHint: '点击下方按钮创建您的第一个分类。',
    newCategoryBtn: '+ 新建分类',

    // Contact
    contactTitle: '联系作者',
    contactInstructions: '如有关于改进应用程序或添加缺失界面语言的问题，请联系作者：',

    // Ad panel — ONLY support, no Pro
    adSupportTitle: '支持本项目',
    adSupportDesc: '您的捐赠将帮助 Linkora 保持免费和开源。',
    adGuideTitle: '需要帮助？',
    adGuideDesc: '阅读快速入门指南。',

    // 🔹 NEW: Donation modal
    supportProject: '支持本项目',
    donateAnyAmount: '任何金额都有帮助！',
    donateThankYou: '感谢您的支持！',

    // 🔹 NEW: General UI
    yes: '是',
    no: '否',

    // 🔹 NEW: Category
    newCategoryTitle: '新建分类',
    categoryNamePlaceholder: '分类名称',

    // 🔹 NEW: Delete confirmations
    deleteCategoryTitle: '删除分类？',
    deleteCategoryMessage: '删除分类“{name}”及其所有链接？',
    deleteLinkTitle: '删除链接？',
    deleteLinkMessage: '您确定要删除此链接吗？',

    // 🔹 NEW: URL form
    urlRequired: '请输入一个链接。',
    invalidUrl: '链接无效。',
    urlPlaceholder: 'https://example.com',
    descriptionPlaceholder: '描述（可选）',

    // 🔹 NEW: Clipboard
    clipboardNoImage: '剪贴板中未找到图像。',
    clipboardError: '无法访问剪贴板。请手动尝试。',

    // 🔹 NEW: Import/Export
    importWarningTitle: '警告！',
    importWarningMessage: '所有当前数据将被替换。是否继续？',
    importSuccess: '数据导入成功！',
    importError: '错误：文件格式无效。',
    noDataToExport: '没有可导出的数据。'
  },
  ar: {
    appName: 'لينكورا',
    addLink: 'إضافة رابط',
    searchPlaceholder: 'البحث عن الروابط أو الوسوم...',
    searchPlaceholderShort: 'بحث',
    noLinks: 'لا توجد روابط بعد.',
    noMatches: 'لا توجد نتائج مطابقة.',
    clearAll: 'مسح الكل',
    openInNewTab: 'فتح في تبويب جديد',
    deleteLink: 'حذف الرابط',
    toggleFavourite: 'إضافة/إزالة من المفضلة',
    editLink: 'تعديل الرابط',
    copyUrl: 'نسخ الرابط',
    copied: 'تم النسخ!',
    fullInstruction: `<ul>
      <li>انقر على «+ فئة جديدة» لإنشاء أول فئة لك.</li>
      <li>بعد ذلك، انقر على الفئة المضافة و«➕ إضافة رابط» لحفظ إشارة مرجعية.</li>
      <li>اسحب الروابط لإعادة ترتيبها داخل فئة.</li>
      <li>لنقل رابط إلى فئة أخرى، اسحبه إلى الفئة المطلوبة.</li>
      <li>انقر على النجمة ★ لإضافة الرابط إلى المفضلة.</li>
      <li>استخدم شريط البحث للعثور بسرعة على الروابط أو الوسوم.</li>
      <li>لفتح رابط، انقر عليه ببساطة.</li>
      <li>عدّل أو احذف الروابط باستخدام الأزرار في قائمة الرابط نفسها (✏️ و ❌).</li>
    </ul>`,
    aboutTitle: 'حول لينكورا',
    aboutContent: 'لينكورا هو مدير إشارات مرجعية خفيف ومفتوح المصدر للمستخدمين المتقدمين.',
    guideTitle: 'دليل المستخدم',
    exportData: 'تصدير البيانات',
    importData: 'استيراد البيانات',
    toggleTheme: 'تبديل السمة',
    openColorPicker: 'سمة مخصصة',
    showFavourites: 'إظهار المفضلة فقط',
    menuLabel: 'القائمة',
    close: 'إغلاق',
    save: 'حفظ',
    cancel: 'إلغاء',
    copyBtn: 'نسخ',
    version: 'الإصدار',
    backToCategories: '← العودة إلى الفئات',

    // Screenshot modal
    screenshotTitle: 'لقطة شاشة لـ:',
    screenshotInstructions: `1. اضغط على الزر أدناه لفتح الرابط.<br>2. خذ لقطة شاشة (مثل Win+Shift+S).<br>3. عد واضغط على «لصق لقطة الشاشة».`,
    openLink: 'فتح الرابط',
    pasteScreenshot: 'لصق لقطة الشاشة من الحافظة',

    // Menu
    about: 'حول',
    instruction: 'دليل المستخدم',

    // Welcome screen
    welcomeTitle: 'مرحبًا بك في لينكورا!',
    welcomeHint: 'انقر على الزر أدناه لإنشاء أول فئة لك.',
    newCategoryBtn: '+ فئة جديدة',

    // Contact
    contactTitle: 'اتصل بنا',
    contactInstructions: 'لأي أسئلة حول تحسين التطبيق أو إضافة لغات واجهة مفقودة، يُرجى مراسلة المؤلف:',

    // Ad panel — ONLY support, no Pro
    adSupportTitle: 'ادعم المشروع',
    adSupportDesc: 'تبرعاتك تساعد في جعل لينكورا مجانيًا ومفتوح المصدر.',
    adGuideTitle: 'هل تحتاج مساعدة؟',
    adGuideDesc: 'اقرأ الدليل السريع للبدء.',

    // 🔹 NEW: Donation modal
    supportProject: 'ادعم المشروع',
    donateAnyAmount: 'أي مبلغ يساعد!',
    donateThankYou: 'شكرًا لدعمك!',

    // 🔹 NEW: General UI
    yes: 'نعم',
    no: 'لا',

    // 🔹 NEW: Category
    newCategoryTitle: 'فئة جديدة',
    categoryNamePlaceholder: 'اسم الفئة',

    // 🔹 NEW: Delete confirmations
    deleteCategoryTitle: 'حذف الفئة؟',
    deleteCategoryMessage: 'حذف الفئة «{name}» وجميع روابطها؟',
    deleteLinkTitle: 'حذف الرابط؟',
    deleteLinkMessage: 'هل أنت متأكد أنك تريد حذف هذا الرابط؟',

    // 🔹 NEW: URL form
    urlRequired: 'الرجاء إدخال رابط.',
    invalidUrl: 'رابط غير صالح.',
    urlPlaceholder: 'https://example.com',
    descriptionPlaceholder: 'الوصف (اختياري)',

    // 🔹 NEW: Clipboard
    clipboardNoImage: 'لم يتم العثور على صورة في الحافظة.',
    clipboardError: 'فشل في الوصول إلى الحافظة. حاول يدويًا.',

    // 🔹 NEW: Import/Export
    importWarningTitle: 'تحذير!',
    importWarningMessage: 'سيتم استبدال جميع البيانات الحالية. هل تريد المتابعة؟',
    importSuccess: 'تم استيراد البيانات بنجاح!',
    importError: 'خطأ: تنسيق الملف غير صالح.',
    noDataToExport: 'لا توجد بيانات للتصدير.'
  },
  ja: {
    appName: 'Linkora',
    addLink: 'リンクを追加',
    searchPlaceholder: 'リンクまたはタグを検索...',
    searchPlaceholderShort: '検索',
    noLinks: 'リンクがまだありません。',
    noMatches: '一致するものが見つかりません。',
    clearAll: 'すべてクリア',
    openInNewTab: '新しいタブで開く',
    deleteLink: 'リンクを削除',
    toggleFavourite: 'お気に入りに追加／削除',
    editLink: 'リンクを編集',
    copyUrl: 'URLをコピー',
    copied: 'コピーしました！',
    fullInstruction: `<ul>
      <li>「+ 新しいカテゴリ」をクリックして、最初のカテゴリを作成してください。</li>
      <li>次に、追加したカテゴリをクリックし、「➕ リンクを追加」をクリックしてブックマークを保存します。</li>
      <li>リンクをドラッグして、カテゴリ内の順序を変更します。</li>
      <li>リンクを別のカテゴリに移動するには、目的のカテゴリにドラッグします。</li>
      <li>スター ★ をクリックして、リンクをお気に入りに追加します。</li>
      <li>検索バーを使用して、リンクやタグを素早く見つけます。</li>
      <li>リンクを開くには、 simplement クリックします。</li>
      <li>リンクのメニューにあるボタン（✏️ と ❌）を使って、リンクを編集または削除します。</li>
    </ul>`,
    aboutTitle: 'Linkora について',
    aboutContent: 'Linkora はパワーユーザー向けの軽量でオープンソースのブックマークマネージャーです。',
    guideTitle: 'ユーザーガイド',
    exportData: 'データをエクスポート',
    importData: 'データをインポート',
    toggleTheme: 'テーマを切り替え',
    openColorPicker: 'カスタムテーマ',
    showFavourites: 'お気に入りのみ表示',
    menuLabel: 'メニュー',
    close: '閉じる',
    save: '保存',
    cancel: 'キャンセル',
    copyBtn: 'コピー',
    version: 'バージョン',
    backToCategories: '← カテゴリに戻る',

    // Screenshot modal
    screenshotTitle: 'スクリーンショット（対象）：',
    screenshotInstructions: `1. 下のボタンをクリックしてリンクを開いてください。<br>2. スクリーンショットを撮ってください（例：Win+Shift+S）。<br>3. 戻って「スクリーンショットを貼り付け」をクリックしてください。`,
    openLink: 'リンクを開く',
    pasteScreenshot: 'クリップボードからスクリーンショットを貼り付け',

    // Menu
    about: 'について',
    instruction: 'ユーザーガイド',

    // Welcome screen
    welcomeTitle: 'Linkoraへようこそ！',
    welcomeHint: '下のボタンをクリックして、最初のカテゴリを作成してください。',
    newCategoryBtn: '+ 新しいカテゴリ',

    // Contact
    contactTitle: 'お問い合わせ',
    contactInstructions: 'アプリの改善や不足している言語の追加に関するご質問は、作者までご連絡ください：',

    // Ad panel — ONLY support, no Pro
    adSupportTitle: 'プロジェクトを支援',
    adSupportDesc: 'あなたの寄付が Linkora の無料・オープンソースを支えます。',
    adGuideTitle: 'ヘルプが必要ですか？',
    adGuideDesc: 'クイックガイドを読んで始めてください。',

    // 🔹 NEW: Donation modal
    supportProject: 'プロジェクトを支援',
    donateAnyAmount: '金額はいくらでも助かります！',
    donateThankYou: 'ご支援ありがとうございます！',

    // 🔹 NEW: General UI
    yes: 'はい',
    no: 'いいえ',

    // 🔹 NEW: Category
    newCategoryTitle: '新しいカテゴリ',
    categoryNamePlaceholder: 'カテゴリ名',

    // 🔹 NEW: Delete confirmations
    deleteCategoryTitle: 'カテゴリを削除しますか？',
    deleteCategoryMessage: 'カテゴリ「{name}」とそのすべてのリンクを削除しますか？',
    deleteLinkTitle: 'リンクを削除しますか？',
    deleteLinkMessage: 'このリンクを削除してもよろしいですか？',

    // 🔹 NEW: URL form
    urlRequired: 'URLを入力してください。',
    invalidUrl: '無効なURLです。',
    urlPlaceholder: 'https://example.com',
    descriptionPlaceholder: '説明（任意）',

    // 🔹 NEW: Clipboard
    clipboardNoImage: 'クリップボードに画像が見つかりません。',
    clipboardError: 'クリップボードにアクセスできませんでした。手動で試してください。',

    // 🔹 NEW: Import/Export
    importWarningTitle: '警告！',
    importWarningMessage: '現在のデータはすべて置き換えられます。続けますか？',
    importSuccess: 'データを正常にインポートしました！',
    importError: 'エラー：無効なファイル形式です。',
    noDataToExport: 'エクスポートするデータがありません。'
  },
  pl: {
    appName: 'Linkora',
    addLink: 'Dodaj link',
    searchPlaceholder: 'Szukaj linków lub tagów...',
    searchPlaceholderShort: 'Szukaj',
    noLinks: 'Brak linków.',
    noMatches: 'Brak wyników.',
    clearAll: 'Wyczyść wszystko',
    openInNewTab: 'Otwórz w nowej karcie',
    deleteLink: 'Usuń link',
    toggleFavourite: 'Dodaj / usuń z ulubionych',
    editLink: 'Edytuj link',
    copyUrl: 'Kopiuj URL',
    copied: 'Skopiowano!',
    fullInstruction: `<ul>
      <li>Kliknij „+ Nowa kategoria”, aby utworzyć pierwszą kategorię.</li>
      <li>Następnie kliknij dodaną kategorię i „➕ Dodaj link”, aby zapisać zakładkę.</li>
      <li>Przeciągaj linki, aby zmienić ich kolejność w obrębie kategorii.</li>
      <li>Aby przenieść link do innej kategorii, przeciągnij go na żądaną kategorię.</li>
      <li>Kliknij gwiazdkę ★, aby dodać link do ulubionych.</li>
      <li>Użyj paska wyszukiwania, aby szybko znaleźć linki lub tagi.</li>
      <li>Aby otworzyć link, wystarczy na niego kliknąć.</li>
      <li>Edytuj lub usuwaj linki za pomocą przycisków w menu samego linka (✏️ i ❌).</li>
    </ul>`,
    aboutTitle: 'O Linkora',
    aboutContent: 'Linkora to lekki, open-source’owy menedżer zakładek dla zaawansowanych użytkowników.',
    guideTitle: 'Poradnik',
    exportData: 'Eksportuj dane',
    importData: 'Importuj dane',
    toggleTheme: 'Zmień motyw',
    openColorPicker: 'Własny motyw',
    showFavourites: 'Tylko ulubione',
    menuLabel: 'Menu',
    close: 'Zamknij',
    save: 'Zapisz',
    cancel: 'Anuluj',
    copyBtn: 'Kopiuj',
    version: 'Wersja',
    backToCategories: '← Powrót do kategorii',

    // Screenshot modal
    screenshotTitle: 'Zrzut ekranu dla:',
    screenshotInstructions: `1. Kliknij przycisk poniżej, aby otworzyć link.<br>2. Zrób zrzut ekranu (np. Win+Shift+S).<br>3. Wróć i kliknij „Wklej zrzut ekranu”.`,
    openLink: 'Otwórz link',
    pasteScreenshot: 'Wklej zrzut ekranu ze schowka',

    // Menu
    about: 'O programie',
    instruction: 'Poradnik',

    // Welcome screen
    welcomeTitle: 'Witaj w Linkora!',
    welcomeHint: 'Kliknij przycisk poniżej, aby utworzyć pierwszą kategorię.',
    newCategoryBtn: '+ Nowa kategoria',

    // Contact
    contactTitle: 'Kontakt',
    contactInstructions: 'W przypadku pytań dotyczących ulepszenia aplikacji lub dodania brakujących języków interfejsu, napisz do autora:',

    // Ad panel — ONLY support, no Pro
    adSupportTitle: 'Wesprzyj projekt',
    adSupportDesc: 'Twoje darowizny pomagają utrzymać Linkorę darmową i open-source’ową.',
    adGuideTitle: 'Potrzebujesz pomocy?',
    adGuideDesc: 'Przeczytaj szybki poradnik.',

    // 🔹 NEW: Donation modal
    supportProject: 'Wesprzyj projekt',
    donateAnyAmount: 'Każda kwota pomaga!',
    donateThankYou: 'Dziękujemy za wsparcie!',

    // 🔹 NEW: General UI
    yes: 'Tak',
    no: 'Nie',

    // 🔹 NEW: Category
    newCategoryTitle: 'Nowa kategoria',
    categoryNamePlaceholder: 'Nazwa kategorii',

    // 🔹 NEW: Delete confirmations
    deleteCategoryTitle: 'Usunąć kategorię?',
    deleteCategoryMessage: 'Usunąć kategorię „{name}” i wszystkie jej linki?',
    deleteLinkTitle: 'Usunąć link?',
    deleteLinkMessage: 'Czy na pewno chcesz usunąć ten link?',

    // 🔹 NEW: URL form
    urlRequired: 'Proszę podać adres URL.',
    invalidUrl: 'Nieprawidłowy adres URL.',
    urlPlaceholder: 'https://przyklad.pl',
    descriptionPlaceholder: 'Opis (opcjonalny)',

    // 🔹 NEW: Clipboard
    clipboardNoImage: 'Nie znaleziono obrazu w schowku.',
    clipboardError: 'Nie udało się uzyskać dostępu do schowka. Spróbuj ręcznie.',

    // 🔹 NEW: Import/Export
    importWarningTitle: 'Uwaga!',
    importWarningMessage: 'Wszystkie bieżące dane zostaną zastąpione. Kontynuować?',
    importSuccess: 'Dane zaimportowane pomyślnie!',
    importError: 'Błąd: nieprawidłowy format pliku.',
    noDataToExport: 'Brak danych do eksportu.'
  },
  tr: {
    appName: 'Linkora',
    addLink: 'Bağlantı ekle',
    searchPlaceholder: 'Bağlantı veya etiket ara...',
    searchPlaceholderShort: 'Ara',
    noLinks: 'Henüz bağlantı yok.',
    noMatches: 'Eşleşme bulunamadı.',
    clearAll: 'Tümünü temizle',
    openInNewTab: 'Yeni sekmede aç',
    deleteLink: 'Bağlantıyı sil',
    toggleFavourite: 'Favorilere ekle / çıkar',
    editLink: 'Bağlantıyı düzenle',
    copyUrl: 'URL’yi kopyala',
    copied: 'Kopyalandı!',
    fullInstruction: `<ul>
      <li>İlk kategorinizi oluşturmak için «+ Yeni kategori»ye tıklayın.</li>
      <li>Ardından eklenen kategoriye ve «➕ Bağlantı ekle»ye tıklayarak bir yer imi kaydedin.</li>
      <li>Bağlantıları bir kategori içinde yeniden sıralamak için sürükleyin.</li>
      <li>Bir bağlantıyı başka bir kategoriye taşımak için istenen kategoriye sürükleyin.</li>
      <li>Bağlantıyı favorilere eklemek için yıldız ★ simgesine tıklayın.</li>
      <li>Bağlantıları veya etiketleri hızlıca bulmak için arama çubuğunu kullanın.</li>
      <li>Bir bağlantıyı açmak için üzerine tıklayın.</li>
      <li>Bağlantıların kendi menüsündeki düğmeleri (✏️ ve ❌) kullanarak düzenleme veya silme yapın.</li>
    </ul>`,
    aboutTitle: 'Linkora Hakkında',
    aboutContent: 'Linkora, ileri kullanıcılar için hafif ve açık kaynaklı bir yer imi yöneticisidir.',
    guideTitle: 'Kullanım Kılavuzu',
    exportData: 'Verileri dışa aktar',
    importData: 'Verileri içe aktar',
    toggleTheme: 'Temayı değiştir',
    openColorPicker: 'Özel tema',
    showFavourites: 'Sadece favorileri göster',
    menuLabel: 'Menü',
    close: 'Kapat',
    save: 'Kaydet',
    cancel: 'İptal',
    copyBtn: 'Kopyala',
    version: 'Sürüm',
    backToCategories: '← Kategorilere dön',

    // Screenshot modal
    screenshotTitle: 'Ekran görüntüsü:',
    screenshotInstructions: `1. Bağlantıyı açmak için aşağıdaki düğmeye tıklayın.<br>2. Ekran görüntüsü alın (örn. Win+Shift+S).<br>3. Geri dönün ve “Ekran görüntüsünü yapıştır”a tıklayın.`,
    openLink: 'Bağlantıyı aç',
    pasteScreenshot: 'Panodan ekran görüntüsünü yapıştır',

    // Menu
    about: 'Hakkında',
    instruction: 'Kullanım Kılavuzu',

    // Welcome screen
    welcomeTitle: 'Linkora’ya Hoş Geldiniz!',
    welcomeHint: 'İlk kategorinizi oluşturmak için aşağıdaki düğmeye tıklayın.',
    newCategoryBtn: '+ Yeni kategori',

    // Contact
    contactTitle: 'İletişim',
    contactInstructions: 'Uygulamanın geliştirilmesi veya eksik arayüz dillerinin eklenmesiyle ilgili sorularınız için lütfen yazarla iletişime geçin:',

    // Ad panel — ONLY support, no Pro
    adSupportTitle: 'Projeyi destekle',
    adSupportDesc: 'Bağışlarınız, Linkora’nın ücretsiz ve açık kaynaklı kalmasına yardımcı olur.',
    adGuideTitle: 'Yardıma mı ihtiyacınız var?',
    adGuideDesc: 'Başlamak için hızlı kılavuzu okuyun.',

    // 🔹 NEW: Donation modal
    supportProject: 'Projeyi destekle',
    donateAnyAmount: 'Her katkı işe yarar!',
    donateThankYou: 'Desteğiniz için teşekkür ederiz!',

    // 🔹 NEW: General UI
    yes: 'Evet',
    no: 'Hayır',

    // 🔹 NEW: Category
    newCategoryTitle: 'Yeni kategori',
    categoryNamePlaceholder: 'Kategori adı',

    // 🔹 NEW: Delete confirmations
    deleteCategoryTitle: 'Kategori silinsin mi?',
    deleteCategoryMessage: '“{name}” kategorisi ve tüm bağlantıları silinsin mi?',
    deleteLinkTitle: 'Bağlantı silinsin mi?',
    deleteLinkMessage: 'Bu bağlantıyı silmek istediğinizden emin misiniz?',

    // 🔹 NEW: URL form
    urlRequired: 'Lütfen bir URL girin.',
    invalidUrl: 'Geçersiz URL.',
    urlPlaceholder: 'https://ornek.com',
    descriptionPlaceholder: 'Açıklama (isteğe bağlı)',

    // 🔹 NEW: Clipboard
    clipboardNoImage: 'Panoda resim bulunamadı.',
    clipboardError: 'Panoya erişilemedi. Manuel olarak deneyin.',

    // 🔹 NEW: Import/Export
    importWarningTitle: 'Uyarı!',
    importWarningMessage: 'Tüm mevcut veriler değiştirilecek. Devam edilsin mi?',
    importSuccess: 'Veriler başarıyla içe aktarıldı!',
    importError: 'Hata: geçersiz dosya biçimi.',
    noDataToExport: 'Dışa aktarılacak veri yok.'
  }
};

// Улучшенная функция локализации с отладкой
function t(key) {
  const lang = localStorage.getItem('lang') || 'ru';
  const translation = translations[lang]?.[key];
  
  if (translation === undefined) {
    console.warn(`⚠️ Missing translation for key "${key}" in language "${lang}"`);
    return translations.en?.[key] || `[${key}]`;
  }
  
  return translation;
}