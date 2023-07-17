let collapsibles = document.querySelectorAll(".collapsible");
// console.log(collapsibles);
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    // console.log("Works!!!");
    this.classList.toggle("collapsible--expanded");
  })
);
