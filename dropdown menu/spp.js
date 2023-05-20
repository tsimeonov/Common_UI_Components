document.addEventListener("click", (e) => {
  const isDropdownButton = e.target.matches(".link");
  if (!isDropdownButton && e.target.closest(".dropdown") !== null) return;

  let currentDropDown;
  if (isDropdownButton) {
    currentDropDown = e.target.closest(".dropdown");
    currentDropDown.classList.toggle("active");
  }

  // Close all not active dropdowns
  document.querySelectorAll(".dropdown").forEach((dropdonw) => {
    if (dropdonw === currentDropDown) return;
    dropdonw.classList.remove("active");
  });
});
