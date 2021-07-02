var GetSet = /** @class */ (function () {
    function GetSet(x, y) {
        this.x = x;
        this.y = y;
    }
    GetSet.prototype.draw = function () {
        console.log(this.x, this.y);
    };
    Object.defineProperty(GetSet.prototype, "X", {
        get: function () {
            return this.x;
        },
        set: function (value) {
            if (value < 0)
                throw new Error("Value of x cant be less than 0");
            this.x = value;
        },
        enumerable: false,
        configurable: true
    });
    return GetSet;
}());
var obj = new GetSet(10, 20);
obj.draw();
var x = obj.X;
obj.X = 100;
obj.draw();
