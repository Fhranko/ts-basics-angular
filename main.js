//type anotations 
//Basicamente declarar Variables
// let a: number;
// let b: string;
// let c: boolean;
// let d: any;
// let e: number[] = [1, 2, 3];
// let f: any[] = [1, true, 'a'];
// enum colors {blue = 1, red = 2, green = 3};
// let bgColor = colors.red;
//---------------------------------------
//type assetions
// "Verificar" para el editor de texto el tipo de la variable
// Esta funcion no cambia el tipo de la variable
// let message = 'abc';
// let endsWithC = (message as string).endsWith('c');
///-----------------------------------------
// Arrow Functions
//En JS
// let log = function(message){
//     console.log(message);
// }
// EN TS 
// let doLog = (message) => console.log(message);
// let noParrameters = () => console.log();
//------------------------------------------
// Custom Types
//Clases
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    Point.prototype.getDistance = function (another) {
        // ... 
    };
    return Point;
}());
var point = new Point();
point.x = 1;
point.y = 2;
point.draw();
