document.addEventListener("DOMContentLoaded", function () {
  let items = document.querySelectorAll("ul li a");
  let dropdownMenus = document.querySelectorAll(".dropdown-menu");

  function closeAllDropdownMenus() {
    dropdownMenus.forEach(function (dropdownMenu) {
      dropdownMenu.style.display = "none";
      dropdownMenu.style.opacity = "0";
      dropdownMenu.style.height = "0";
      dropdownMenu.style.transition = "opacity 2s ease-in-out";
      dropdownMenu.style.outline = "1px solid red";
    });
  }

  items.forEach(function (item) {
    item.addEventListener("mouseover", function (e) {
      e.preventDefault();
      closeAllDropdownMenus();
      let target = this.getAttribute("data-target");
      let dropdownMenu = document.getElementById(target);
      dropdownMenu.style.display = "block";
      dropdownMenu.style.opacity = "1";
      dropdownMenu.style.height = "auto";
      dropdownMenu.style.outline = "1px solid blue";
    });
  });

  dropdownMenus.forEach(function (menu) {
    menu.addEventListener("mouseleave", function (e) {
      closeAllDropdownMenus();
    });
  });
});
