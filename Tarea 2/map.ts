const productos = [
    {nombre: "laptop", precio: 800},
    {nombre: "mouse", precio: 25},
    {nombre: "teclado", precio: 60}
];

const descuento = productos.map((producto) => {
    return{
    nombre: producto.nombre,
    precio: producto.precio - (producto.precio * 0.10)

    }
});

console.log(descuento)