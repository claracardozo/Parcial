document.addEventListener("DOMContentLoaded", function () {
  listarMenus();
});




function listarMenus() {
  fetch('/PaginaClara/controller/menu.php?op=listar')
      .then((response) => response.json())
      .then((menus) => {
          const navbar = document.querySelector(".navbar");
          navbar.innerHTML = menus.map(menu => `<a href="${menu.url}">${menu.opcion}</a>`).join('');
      })
      .catch((error) => console.error("Error cargando los menús:", error));
}

