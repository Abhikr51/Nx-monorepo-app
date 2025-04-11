use std::collections::HashMap;
use std::cell::RefCell;
use wasm_bindgen::prelude::*;

// Use thread-local for WASM memory safety
thread_local! {
    static STORAGE: RefCell<HashMap<String, String>> = RefCell::new(HashMap::new());
}

#[wasm_bindgen]
pub fn write_file(filename: &str, content: &str) {
    STORAGE.with(|store| {
        store.borrow_mut().insert(filename.to_string(), content.to_string());
    });
}

#[wasm_bindgen]
pub fn read_file(filename: &str) -> String {
    STORAGE.with(|store| {
        store
            .borrow()
            .get(filename)
            .cloned()
            .unwrap_or_else(|| "File not found".to_string())
    })
}
