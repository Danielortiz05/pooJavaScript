//Objeto literal

const daniel = {
    nombre : "Daniel",
    edad: 20,
    cursosAprobados: [
        "Curso definitivo de HTML y CSS",
        "Curso practico de HTML y CSS",
    ],
    agregarCursosAprobados (nuevoCurso){
        this.cursosAprobados.push(nuevoCurso)
    }
}

// Creación de prototipo

function Estudiante (name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    //Para la creación de metodos en un prototipo se pueden usar dos formas diferentes. La primera va ser dentro de la función.
    //this.agregarCursosAprobados = function (nuevoCurso){
    //    this.cursosAprobados.push(nuevoCurso);
    //} 
}

//O también se puede hacer por fuera de la función haciendo referencia al prototipo y usando la palabra reservada prototype

Estudiante.prototype.agregarCursosAprobados = function (nuevoCurso){
    this.cursosAprobados.push(nuevoCurso);
}

//Para crear una nueva instancia de un prototipo se debe usar la palabra reservada new.

const Daniel = new Estudiante(
    "Daniel",
    24,
    [
        "Curso definitivo de HTML y CSS",
        "Curso practico de HTML y CSS"
    ]
)


//Prototipos con sintaxis de clases.

class Student {
    // Se debe crear un metodo constructor que va ser quien reciba los datos de los atributos definidos.
    constructor (name, age, cursosAprobados){
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }
    //Se agrega metodos dentro de la clase que en realidad es un prototipo
    agregarCursosAprobados(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso);
    }
}

const polo = new Student(
    "polo",
    21,
    [
        "Curso de Ciencias de datos",
        "Curso basico de programación"
    ]
)