// clear   toImage
class Signature {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    this.initCanvas();
  }
  initCanvas = () => {
    this.canvas.onmousedown = this.onMouseDown;
    this.canvas.onmousemove = this.onMouseMove;
    this.canvas.onclick = this.onMouseClick;
  };
  onMouseClick = (e: MouseEvent) => {
    const x = e.offsetX;
    const y = e.offsetY;
    this.ctx.lineTo(x, y);
    this.ctx.stroke();
  };
  onMouseDown = (e: MouseEvent) => {
    const x = e.offsetX;
    const y = e.offsetY;
    this.ctx.beginPath();
    this.ctx.moveTo(x, y);
  };
  onMouseMove = (e: MouseEvent) => {
    if (e.buttons !== 1) return;
    const x = e.offsetX;
    const y = e.offsetY;
    this.ctx.lineTo(x, y);
    this.ctx.stroke();
  };
  claer = () => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };
  toImage = () => {
    return this.canvas.toDataURL("image/png");
  };
}
export default Signature;
