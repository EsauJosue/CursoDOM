let nombre = document.querySelector('#app-title');
nombre.innerHTML = "Hola esau";
console.log(nombre.innerHTML);

let textos = document.querySelectorAll('p');
textos.forEach((texto) => {

    console.log(texto.innerHTML);
});

// Existen diferentes formas de seleccionar elementos del DOM, en este caso se utilizo querySelector y querySelectorAll
// querySelector selecciona el primer elemento que cumpla con la condicion, en este caso se selecciono el elemento con el id app-title
// querySelectorAll selecciona todos los elementos que cumplan con la condicion, en este caso se seleccionaron todos los elementos p
// Se utilizo un forEach para recorrer todos los elementos p y mostrar su contenido en la consola
// Se utilizo innerHTML para modificar el contenido de los elementos seleccionados
// Se utilizo innerHTML para mostrar el contenido de los elementos seleccionados en la consola
//Existe tambien el getElementById que selecciona un elemento por su id
//EJEMPLO:
//let nombre = document.getElementById('app-title');
//Existe tambien el getElementsByClassName que selecciona un elemento por su clase
//EJEMPLO:
//let textos = document.getElementsByClassName('parrafo');
//Existe tambien el getElementsByTagName que selecciona un elemento por su etiqueta
//EJEMPLO:
//let textos = document.getElementsByTagName('p');
//Existe tambien el getElementsByName que selecciona un elemento por su nombre
//EJEMPLO:
//let textos = document.getElementsByName('nombre');

//En cuanto a la optimizacion de velocidad de carga es más rápido getElementById que querySelector
//getElementById es más rápido que querySelectorAll
//getElementById es más rápido que querySelector
//getElementsByTagName es más rápido que querySelectorAll