const calcularPrecio = (precioBase: number, tipo: string, codigo?: string) => {

    let precioFinal = precioBase

    if(tipo == "VIP") {
        precioFinal += 20;
    }

    if(codigo === "ESTUDIANTE"){
        precioFinal *=0.5;
    }

    console.log("El precio final de su entrada es: ", precioFinal);
};

calcularPrecio(30, "GENERAL");
calcularPrecio(30, "VIP");
calcularPrecio(30, "VIP", "ESTUDIANTE")
calcularPrecio(30,"GENERAL", "ESTUDIANTE")