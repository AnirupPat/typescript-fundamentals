var Point4 = /** @class */ (function () {
    function Point4(x, y) {
        this.x = x;
        this.y = y;
    }
    Point4.prototype.draw = function () {
        console.log(this.x, this.y);
    };
    return Point4;
}());
var point = new Point4(30, 50);
// point.x point.y is not editable as they have private access modifier.
point.draw();
