var Help = /** @class */ (function () {
    function Help(x, y) {
        this.x = x;
        this.y = y;
    }
    Help.prototype.draw = function () {
        console.log(this.x, this.y);
    };
    Help.prototype.getX = function () {
        return this.x;
    };
    Help.prototype.setX = function (value) {
        if (value < 0) {
            throw new Error("Value cant be less than 0");
        }
        else {
            this.x = value;
        }
    };
    return Help;
}());
var helpObj = new Help(10, 20);
helpObj.draw();
helpObj.getX();
helpObj.setX(50);
helpObj.draw();
