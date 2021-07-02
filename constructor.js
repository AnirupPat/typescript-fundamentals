var Point3 = /** @class */ (function () {
    function Point3(x, y) {
        this.x = x;
        this.y = y;
    }
    Point3.prototype.draw = function () {
        console.log(this.x, this.y);
    };
    return Point3;
}());
var point = new Point3(20, 40);
point.x = 30;
point.draw();
