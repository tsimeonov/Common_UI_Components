document.addEventListener("DOMContentLoaded", function () {
  let items = document.querySelectorAll(".dropdown-header li a");
  let dropdownMenus = document.querySelectorAll(".dropdown-menu");

  function closeAllDropdownMenus() {
    dropdownMenus.forEach(function (dropdownMenu) {
      dropdownMenu.classList.remove("show");
    });
  }

  items.forEach(function (item) {
    item.addEventListener("mouseover", function (e) {
      e.preventDefault();
      closeAllDropdownMenus();
      let target = this.getAttribute("data-target");
      let dropdownMenu = document.getElementById(target);
      dropdownMenu.classList.add("show");
    });
  });

  dropdownMenus.forEach(function (menu) {
    menu.addEventListener("mouseleave", function (e) {
      closeAllDropdownMenus();
    });
  });
});
