document.addEventListener("DOMContentLoaded", function () {
  let items = document.querySelectorAll("ul li a");
  let dropdownMenus = document.querySelectorAll(".dropdown-menu");

  function closeAllDropdownMenus() {
    dropdownMenus.forEach(function (menu) {
      menu.style.display = "none";
    });
  }

  items.forEach(function (item) {
    item.addEventListener("mouseover", function (e) {
      e.preventDefault();
      let target = this.getAttribute("data-target");
      let dropdownMenu = document.getElementById(target);
      closeAllDropdownMenus();
      dropdownMenu.style.display = "block";
    });
  });

  dropdownMenus.forEach(function (menu) {
    menu.addEventListener("mouseleave", function (e) {
      closeAllDropdownMenus();
    });
  });
});
