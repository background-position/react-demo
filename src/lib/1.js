class eventBus {
  constructor() {
    this.events = {};
  }
  on(name, fn) {
    if (!this.events[name]) {
      this.events[name] = [];
    }
    this.events[name].push(fn);
  }
  off(name, fn) {
    if (!this.events[name]) return;
    this.events[name] = this.events[name].filter((item) => item !== fn);
  }
  emit(name, ...rest) {
    if (!this.events[name]) return;
    this.events[name].forEach((fn) => fn.apply(this, rest));
  }
}
const bus = new eventBus();
bus.on("click", (a, b) => {
  console.log(a, b);
});
bus.emit("click", 1, 2);
