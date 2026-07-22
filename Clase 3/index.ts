// let nombre = "Valeria";
// let edad = "20";
// let esEstudiante = true;

// console.log(nombre, edad, esEstudiante)


//condicionales 
// let nota: number = 8.5;


// if(nota >=9.0){
//     //LAS INSTRUCCIONES SI LA CONDICION SE CUMPLE
//     console.log("Excelente, Aprobado")
// }else if(nota >= 6.0){
//     console.log("Aprobado")
// }else{
//     console.log("Reprobado")
// }

//Condicional con operador ternario

// let edad: number = 20

// let resultado: string = (edad >= 18) ? "Es mayor de edad." : "Es menor de edad."
// console.log(resultado)

//Arreglos
// let materias: string[] = ["POE", "ASW", "Estructura de datos", "Mate"];
// console.log(materias)
// materias.forEach((materia) => {
//     console.log(`La materia es: ${materia}`)
// });

// console.log(materias.join(", "))


//Funciones 
// function sumar (a: number, b: number): number {
//     return a + b
// }
// console.log("El resultado de la suma es: ",sumar(5, 7))

// function restar (a: number, b: number): number {
//     return a - b
// }
// console.log("El resultado de la resta es: ", restar(10, 5))

// function dividir (a: number, b: number): number {
//     return a / b
// }
// console.log("El resultado de la division es: ", dividir(10, 2))

// function multiplicar (a: number, b: number): number {
//     return a * b
// }
// console.log("El resultado de la multiplicacion es: ", multiplicar(10, 10))

//Modelado de plantillas / creacion de objetos 

type Alumno = {
    nombre: string;
    edad: number;
    activo: boolean;
    telefono?: string; //El operador ternario vuelve el atributo opcional.
    carnet?: string;
}

let NAlumno : Alumno = {
    nombre: "Panchito",
    edad: 25,
    activo: true,
    carnet: "u20200495",
}

console.log("El nombre del nuevo estudiante es: ", NAlumno.nombre)
console.log("La edad del alumno es: ", NAlumno.edad )
console.log("El estudiante se encuentra en estado: ", NAlumno.activo)
console.log("El numero de carnet es: ", NAlumno.carnet)