var formulario = document.querySelector(".formulario"); // se puso bien formulario

formulario.onsubmit = function(e) {

  e.prevent();
  
  var nombre = formulario.elements[0] // se puso bien el nombre
  var edad = formulario.elements[1] // se puso bien la edad 
  var nacionalidad = formulario.elements[2] // lo mismo con la nacionalidad 

  var nombre = nombre.value // nombre
  var edad = edad.value // edad 

  var i = nacionalidad.selectedIndex // nacionalidad 
  var nacionalidad = nacionalidad.options[i].value
  console.log(nombre, edad); // falto punto y coma
  console.log(nacionalidad); // falto el punto y la coma

  if (nombre.length === 0) {
    nombre.classList.add("error"); // se puso punto y coma
  }
  if (edad < 18 || edad > 120) {
    edad.classList.add("error"); // se puso punto y coma
  }

if (nombre.length > 0 
  && (edad > 18 
    && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad);
  }
}

var botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br");
document.body.appendChild(corteLinea);
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }

var lista = document.getElementById("lista-de-invitados");

var elementoLista = document.createElement("div");
elementoLista.classList.added("elemento-lista");
lista.appendChild(elementoLista);

var spanNombre = document.createElement("span");
var inputNombre = document.createElement("input");
var espacio = document.createElement("br");
spanNombre.textContent = "Nombre: ";
inputNombre.value = nombre;
elementoLista.appendChild(spanNombre);
elementoLista.appendChild(inputNombre);
elementoLista.appendChild(espacio);

function crearElemento(descripcion, valor) {
var spanNombre = document.createElement("span");
var inputNombre = document.createElement("input");
var espacio = document.createElement("br");
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
elementoLista.appendChild(spanNombre);
elementoLista.appendChild(inputNombre);
elementoLista.appendChild(espacio);
}

crearElemento("Nombre", nombre);
crearElemento("Edad", edad);
crearElemento("Nacionalidad", nacionalidad); // se úso el ; sl final 


var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }
}