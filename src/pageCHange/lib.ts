class PageCHange {
  private callBack: () => void;
  constructor(callBack: () => void) {
    console.log("PageCHange");
    this.callBack = callBack;
  }
  run = () => {
    this.callBack();
  };
}
export { PageCHange };
