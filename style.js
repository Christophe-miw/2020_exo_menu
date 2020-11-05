function burger() {
  let menu = document.getElementById("menu");

  if (menu.className === "active") {
    menu.className = "inactive";
  } else {
    menu.className = "active";
  }
}
