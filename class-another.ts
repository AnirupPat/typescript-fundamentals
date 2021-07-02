class Help {
  constructor(private x: number, private y: number) {}
  draw() {
    console.log(this.x, this.y);
  }
  getX() {
    return this.x;
  }
  setX(value) {
    if (value < 0) {
      throw new Error("Value cant be less than 0");
    } else {
      this.x = value;
    }
  }
}

let helpObj = new Help(10, 20);
helpObj.draw();
helpObj.getX();
helpObj.setX(50);
helpObj.draw();
