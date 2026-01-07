// src-tauri/src/main.rs
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

fn main() {
    let mut builder = tauri::Builder::default().plugin(tauri_plugin_shell::init());

    #[cfg(debug_assertions)]
    {
        builder = builder.plugin(tauri_plugin_log::Builder::default().build());
    }

    builder
        .setup(|_app| Ok(()))
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}