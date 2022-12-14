
const edad = prompt("ingrese su edad");
if (edad < 18) {
  alert("Sos menor de edad, entras bajo tu responsabilidad.");
} else {
  alert("Podes entrar, sos mayor de edad.");
}

const categorias = ["Accion", "Aventura", "Carrera", "Deporte", "Estrategia"]
let categoriaSeleccionada = prompt ('Elige una categoria: Accion, Aventura, Carrera, Deporte, Estrategia');
console.log(categoriaSeleccionada)
while (!categorias.includes(categoriaSeleccionada)){
    console.log(categoriaSeleccionada)
    categoriaSeleccionada = prompt ('Elige una de las categorias disponibles: Accion,Aventura,Carrera,Deporte,Estrategia');
}