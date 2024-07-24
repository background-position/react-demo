export interface FileInput extends HTMLInputElement {}
const createFileInput = (config?: FileInput) => {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = config?.accept || "";
  input.capture = config?.capture || "";
  return input;
};
export { createFileInput };
