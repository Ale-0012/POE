interface Producto {
    nombre: string;
    precio: number;
    descuento?: number;
}

let productosList : Producto [] = [
    {
        nombre: "Laptop",
        precio: 1200,
        descuento: 0.20
    },

    {
        nombre: "Pendrive",
        precio: 100,
    },

    {
        nombre: "Teclado",
        precio: 135,
        descuento: 0.20
    }
]



productosList.forEach((precioFinal) => {
    let total = precioFinal.precio - (precioFinal.descuento ? precioFinal.precio * precioFinal.descuento : 0)
    console.log("El precio final de su producto es de: ", total)
})






