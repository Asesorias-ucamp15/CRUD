// const texto = document.getElementById("#input")

// console.log(texto)

// const lista = []

//* Create 
// const btnAgregar = (algo) => {
//   lista.push(algo)
// }

//*Read


//* Update
// const btnEditar = (position, newValue) => {
//   lista.splice(position, 1, newValue)
// }

//* Delete
// const btnDelete = (position) => {
//   lista.splice(position, 1)
//   // lista.pop()
//   // lista.unshift()
// }

class Cursos {
  constructor(titulo, dificultad){
    this.titulo = titulo
    this.dificultad = dificultad
    this.lecciones = []
  }

  agregarLeccion(leccion){
    this.lecciones.push(leccion)
  }

  eliminarLeccion(){
    this.leccciones.pop()
  }
}

const CursoJavascript = new Cursos("Javascript", 2)

console.log(CursoJavascript)

CursoJavascript.agregarLeccion("DOM")

CursoJavascript.eliminarLeccion()





