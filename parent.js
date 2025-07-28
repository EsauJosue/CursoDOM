const parent = document.getElementById("parent");
console.log(parent);

const children = parent.children;
console.log("Children ",children);

const firstChild = parent.firstElementChild;
console.log("First Child ",firstChild);

const lastChild = parent.lastElementChild;
console.log("Last Child -",lastChild);

const previousSibling = parent.previousElementSibling;
console.log("Previous Sibling -",previousSibling);

const nextSibling = parent.nextElementSibling;
console.log("Next Sibling - ",nextSibling);


// De hijos a padres

const children2 = document.querySelector("li");
console.log(children2);

const parent2 = children2.parentNode;
console.log("Hijo a Padre ",parent2)

const grandParent = children2.parentElement;
console.log(grandParent);

const grandGrandParent = children2.closest("menu");
console.log(grandGrandParent);

const titulo = document.querySelector("#app-title");
console.dir(titulo);
titulo.textContent = "Este es un titulo cambiado"; //tambien se puede usar innerText

//Cambiando el estilo
titulo.style.background = "yellow";

//Agregando una clase
titulo.className ="ClaseNueva ClaseVieja";

const menu = document.querySelector(".menu");
console.log(menu);
const button = document.querySelector("button");
button.addEventListener("click", ()=>{
    menu.classList.toggle("invisible");
})
//className rescribe las clases usadas
//listName agrega clases a las que ya están asignadas