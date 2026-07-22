type Registro = {
    nombre: string;
    carrera: string;
    email? : string;
    asiento? : number;   
}

let asistente : Registro = {
    nombre: "juan",
    carrera: "Medicina",
    email: "correoAlumno_1@gmail.com",
    asiento: 7
}

let asistente2 : Registro = {
    nombre: "Cristopher",
    carrera: "Mercadotecnia",
}

if (asistente.email && asistente.asiento){
    console.log("Sus datos son:")
    console.log("Nombre: ", asistente.nombre)
    console.log("Carrera: ", asistente.carrera)
    console.log("Email: ", asistente.email)
    console.log("Numero de asiento: ", asistente.asiento)
    console.log("Te damos la bienvenida al seminario!")
}else{
    console.log("Los datos no existen.")
}

if (asistente2.email && asistente2.asiento){
    console.log("Sus datos son:")
    console.log("Nombre: ", asistente.nombre)
    console.log("Carrera: ", asistente.carrera)
    console.log("Email: ", asistente.email)
    console.log("Numero de asiento: ", asistente.asiento)
    console.log("Te damos la bienvenida al seminario!")
}else{
    console.log("/////////////Ejemplo. Los datos no existen.//////////////////")
}