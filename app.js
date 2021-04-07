let products = document.querySelectorAll(".cards");

products.forEach(function (item) {
  item.addEventListener("click", function () {
    let clickedItem = item.childNodes[3].innerHTML;

    alert(clickedItem);
    location.href = "productDetails.html";
  });
});
