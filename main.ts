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

// class Point {
//     x: number;
//     y: number;

//     //Constructors
//     // Metodo por el cual puede pasar parametros opcionales
//     constructor( x?:number, y?:number ) {
//         this.x = x;
//         this.y = y;
//     }

//     draw() {
//         console.log( 'X: ' + this.x + ', Y: ' + this.y);
//     }
// }

// let point = new Point();
// //Ambos opcionales si usas el metodo constructor
// point.x = 1;
// point.y = 2;
// point.draw();

//Modificadores de acceso
// public
// private
// protected

// class Point {
//     constructor( private x?:number, private y?:number ) {
//     }

//     draw() {
//         console.log( 'X: ' + this.x + ', Y: ' + this.y);
//     }
// }

// let point = new Point( 1, 2);
// //Ambos opcionales si usas el metodo constructor
// point.draw();
//------------------------------
//Propierties 
// get and set propierties, whit a function
// class Point {
//     constructor( private _x?:number, private _y?:number ) {
//     }

//     draw() {
//         console.log( 'X: ' + this._x + ', Y: ' + this._y);
//     }
//     get x(){
//         return this.x ;
//     }

//     set x( value ) {
//         if (value <  0 )
//             throw new Error('Value cannot be less than 0');
//         this._x = value;
//     }
    
// }

// let point = new Point( 1, 2);
// let x = point.x
// point.x = 10
// point.draw();

//------------------
//Modules
import { Point } from './point'
let point = new Point( 1, 2);
point.draw();