class LoadImage {
  constructor(box: HTMLElement) {
    this.init(box);
  }
  init = (box: HTMLElement) => {
    box.style.backgroundImage =
      "url('https://images.unsplash.com/photo-1634170380004-3b3b3b3b3b3b')";
    const { width, height } = box.getBoundingClientRect();
    const row = 3;
    const col = 3;
    const smallWidth = width / col;
    const smallHeight = height / row;
    this.createImage(box, row, col, smallWidth, smallHeight);
  };
  createImage = (
    box: HTMLElement,
    row: number,
    col: number,
    smallWidth: number,
    smallHeight: number,
  ) => {
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        const div = document.createElement("div");
        div.innerText = `${i}-${j}`;
        div.classList.add("small-box");
        div.style.width = smallWidth + "px";
        div.style.height = smallHeight + "px";
        div.style.border = "1px solid #000";
        const offsetX = j * smallWidth * -1;
        const offsetY = i * smallHeight * -1;
        div.style.backgroundPosition = `${offsetX}px ${offsetY}px`;
        div.style.backgroundSize = `${row * smallWidth}px ${col * smallHeight}px`;
        box.appendChild(div);
      }
    }
  };
  left = () => {};
}
export { LoadImage };
