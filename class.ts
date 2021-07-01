class Point2 {
    x: number;
    y: number;
    draw = () => {
        console.log(this.x, this.y);
    }
    getDistance: (another: Point2) => {

    }
}

let point = new Point2();
point.x = 10;
point.y = 20;
point.draw();