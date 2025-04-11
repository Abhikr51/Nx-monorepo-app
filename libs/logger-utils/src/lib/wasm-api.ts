import init, { read_file, write_file } from './wasm/libs_wasm_module';

let initialized = false;

export const initWasm = async () => {
  if (!initialized) {
    await init();
    initialized = true;
  }
};

// Expose your Wasm-backed functions
export const writeToFile = async (filename: string, content: string) => {
  await initWasm();
  return write_file(filename, content);
};

export const readFromFile = async (filename: string) => {
  await initWasm();
  return read_file(filename);
};

