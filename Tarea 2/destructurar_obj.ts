// Objeto de evento
const evento = {
  tipo: "CLICK",
  coordenadas: { x: 100, y: 200 },
  usuario: "Ana"
};

const{coordenadas, usuario} = evento;
const{x, y} = coordenadas

console.log("Usuario: " + usuario)
console.log("Coordenada x: " + x)
console.log("Coordenada Y: " + y)