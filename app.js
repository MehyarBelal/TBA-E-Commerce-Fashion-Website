let products = document.querySelectorAll(".cards");

products.forEach(function (item) {
  item.addEventListener("click", function () {
    alert(item.childNodes[3].innerHTML);
  });
});
