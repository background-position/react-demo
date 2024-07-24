const randomNumber = (min: number = 0, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const randomColor = () => {
  return `rgb(${randomNumber(0, 255)}, ${randomNumber(0, 255)}, ${randomNumber(0, 255)})`;
};

interface FireworkOptions {
  color: string;
  x?: number;
  y?: number;
}

class Firework {
  private color: string;
  private x: number;
  private y: number;
  // 发射状态 waiting launching bursting fading done
  public status: "waiting" | "launching" | "bursting" | "fading" | "done";
  constructor(
    options: FireworkOptions = {
      color: randomColor(),
    },
  ) {
    const { color, x, y } = options;
    this.color = color;
    this.x = x || randomNumber(0, window.innerWidth);
    this.y = y || window.innerHeight;
    // this.launcher = null;
    // this.explosive = null;
    this.status = "waiting";
  }
  launch = () => {
    console.log("launch");
  };
  burst = () => {};
}
export default Firework;
