const contentArea = document.querySelector('#contentArea');
const texto = contentArea.querySelector('p');
const textoDuplicado = texto.cloneNode(true);
contentArea.append(textoDuplicado);

//Seleccionando un Item de la lista

const lista = document.querySelector('#listArea');
const item = lista.children[2];
console.log(item.innerText);

item.replaceWith(textoDuplicado);