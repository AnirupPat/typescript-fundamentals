export class GetSet {
  constructor(private _x: number, private _y: number) {}
  draw() {
    console.log(this._x, this._y);
  }
  get x() {
    return this._x;
  }
  set x(value) {
    if (value < 0) throw new Error("Value of x cant be less than 0");

    this._x = value;
  }
}

// export default GetSet;
