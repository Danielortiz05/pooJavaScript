//Los objetos literales en javascript son !== a las instancias de los prototipos creados por nosotros, pero si son instancias del prototipo Object de JavaScript.
//Sintaxis de objeto literal: 
// const literalObject = {
//     name: "Daniel",
//     age: 20,
// }  
//JavaScript es un lenguaje de programación orientado a objetos pero no basado en clases sino en prototipos por ende para poder instanciar objetos se 
//puede hacer de diferentes formas. La primera de ellas es por medio de una función usando palabras reservadas como this para almacenar atributos y new 
//para crear nuevas instancias.
//Sintaxis: 
// function Persona(){
//     this.name = "Nombre";
//     this.age = 24;
// } 

// const daniel = new Persona();

//En JavaScript para crear metodos dentro de los objetos literales nos podemos encontrar con sintaxis diferentes las cuales son:
//1. agregarHobbies: function(){

//}

//2. agregarHobbies(){

//}

//Al querer hacer referencia de un atributo dentro de un objeto se puede usar la palabra clave this, la cual va hacer referencia a el objeto. 

// Pilar de programación orientada a objetos

// 1. Abstracción

//La abstracción es el proceso de reconocer atributos y metodos de un objeto que se desee representar, aquellas caracteristicas que se van a heredar en cada una de 
// las instancias.


//2. Encapsulamiento

//El encapsulamiento es la acción de guardar, proteger o limitar el acceso a ciertos atributos o metodos de un objeto o prototipo para que estos
// no sean alterados o modificado. En javascript el encapsulamiento se puede hacer de diferentes formas 1. Getters y Setters 2.Namespaces 3. Object.defineProperties 4.Modulo de ES6

// 3. Herencia

// La herencia permite definir nuevas clases basadas en otras con el fin de reutilizar código con ello podría heredar sus caracteristicas y atributos.

// 4. Polimorfismo

// Es el principio de la programación orientada a objetos que permite modificar o cambiar el comportamiento de los atributos o metodos heredados definidos en
// una clase padre.

//Static

//En JavaScript hay una palabra reservada llamada static, la cual sirve para asignarse a atributos y metodos de un prototipo con el fin de no crear
// instancias de prototipos para poder acceder a estas.
// Ej con atributos:
// class Persona {
//     static name = "Daniel";
// } 

// console.log(Persona.name)

// Ej con metodos 

// class Persona{
//     static correr(){
//         return "Corriendo"
//     }
// }

// console.log(Persona.correr())

//Los atributos en JavaScript tienen otros atributos internos llamados writable, enumerable, configurable.
//Writable si su valor es false, no permite sobre escribir el atributo.
//Enumerable si su valor es false, no se va a mostrar en metodos del prototipo object como Object.keys.
//Configurable si su valor es false, no se va a permitir que se borre el atributo.

// Object.seal() no permite borrar a los atributos.
//Object.freeze() no permite borrar ni modificar los atributos.
