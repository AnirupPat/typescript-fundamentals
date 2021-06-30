var a;
var b;
var c;
var d;
var e = [1, 2, 3, 4];
var f = [1, true, 'a'];
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var backgroundColor = Color.Blue;
