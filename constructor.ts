class Point3 {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  draw() {
    console.log(this.x, this.y);
  }
}

let point = new Point3(20, 40);
point.x = 30;
point.draw();
