var Point2 = /** @class */ (function () {
    function Point2() {
        var _this = this;
        this.draw = function () {
            console.log(_this.x, _this.y);
        };
    }
    return Point2;
}());
var point = new Point2();
point.x = 10;
point.y = 20;
point.draw();
