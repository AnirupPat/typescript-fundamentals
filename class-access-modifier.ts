class Point4 {
  private x: number;
  private y: number;

  constructor(x?: number, y?: number) {
    this.x = x;
    this.y = y;
  }

  draw() {
    console.log(this.x, this.y);
  }
}

let point = new Point4(30, 50);
// point.x point.y is not editable as they have private access modifier.
point.draw();
