//Vamos a seleccionar elementos de forma jerarquica, ya sea del padre a los elementos hijos o de los hijos al padre.

//Seleccionar elementos de forma jerarquica
const parent = document.getElementById('parent');
// console.log(parent);
//Seleccionar a los hijos de un elemento
const children = parent.children;
// console.log(children);
//Seleccionar al primer hijo
const firstChild = parent.firstElementChild;
// console.log(firstChild);
//Seleccionar al ultimo hijo
const lastChild = parent.lastElementChild;
// console.log(lastChild);
//Seleccionar al el elemento previo del padre
const previousSibling = parent.previousElementSibling;
// console.log(previousSibling);
//Seleccionar al siguiente elemento del padre
const nextSibling = parent.nextElementSibling;
// console.log(nextSibling);


// children; // live HTMLCollection
// childNodes; // live NodeList
// firstChild; // live NodeList
// firstElementChild; // non-live HTMLCollection
// lastChild; // live NodeList
// lastElementChild; // non-live HTMLCollection
// previousSibling; // live NodeList
// previousElementSibling; // non-live HTMLCollection
// nextSibling; // live NodeList
// nextElementSibling; // non-live HTMLCollection

//Seleccionando de hijos a padres

const child = document.querySelector('li');
console.log(child);
//Seleccionar al padre del elemento
const parentElement = child.parentElement;
console.log(parentElement);
//Seleccionar al nodo padre del elemento
const parentNode = child.parentNode;
console.log(parentNode);