const contentArea = document.querySelector("#contentArea");
contentArea.innerHTML = "<p>Este es un nuevo parrafo</p>"; 
contentArea.insertAdjacentHTML("beforeend", "<p>Este es otro parrafo</p>");
contentArea.insertAdjacentHTML("afterbegin", "<p>Este es un parrafo al inicio</p>");
contentArea.insertAdjacentHTML("beforebegin", "<p>Este es un parrafo antes del contenido</p>");
contentArea.insertAdjacentHTML("afterend", "<p>Este es un parrafo despues del contenido</p>");
contentArea.innerHTML += "<p>Este es un parrafo agregado al final</p>";
contentArea.innerHTML = "<p>Este es un nuevo contenido</p>"; // Reemplaza todo el contenido existente
contentArea.innerHTML = "<p>Este es un nuevo contenido con un <strong>texto en negrita</strong></p>";
contentArea.innerHTML = "<p>Este es un nuevo contenido con un <em>texto en cursiva</em></p>";
contentArea.innerHTML = "<p>Este es un nuevo contenido con un <a href='#'>enlace</a></p>";
contentArea.innerHTML = "<p>Este es un nuevo contenido con una <span style='color: red;'>etiqueta de estilo</span></p>";
contentArea.innerHTML = "<p>Este es un nuevo contenido con una <ul><li>lista</li><li>de</li><li>elementos</li></ul></p>";
contentArea.innerHTML = "<p>Este es un nuevo contenido con una <ol><li>lista</li><li>ordenada</li></li></ol></p>";
contentArea.innerHTML = "<p>Este es un nuevo contenido con una <table><tr><td>tabla</td><td>de</td><td>datos</td></tr></table></p>";
contentArea.innerHTML = "<p>Este es un nuevo contenido con un <div>div</div> y un <span>span</span></p>";
contentArea.innerHTML = "<p>Este es un nuevo contenido con un <img  src='https://via.placeholder.com/150' alt='Imagen de ejemplo'></p>";
contentArea.innerHTML = "<p>Este es un nuevo contenido con un <video controls><source src='https://www.w3schools.com/html/mov_bbb.mp4' type='video/mp4'>Tu navegador no soporta el video.</video></p>";