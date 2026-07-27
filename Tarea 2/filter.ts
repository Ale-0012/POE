const productos = [
  { nombre: "Laptop", precio: 800 },
  { nombre: "Mouse", precio: 25 },
  { nombre: "Monitor", precio: 200 },
  { nombre: "USB", precio: 15 }
];

const preciosAlto = productos.filter((producto)  => producto.precio > 50)
console.log()

console.log("Los precios que sobrepasan $50 son:")

preciosAlto.forEach((producto) =>{
    console.log(`${producto.nombre}: ${producto.precio}`)
})