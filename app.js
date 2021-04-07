let products = document.querySelectorAll(".cards");

products.forEach(function (item) {
  item.addEventListener("click", function () {
    let clickedItem = item.childNodes[3].innerHTML;

    window.localStorage.setItem("product", clickedItem);
    location.href = "productDetails.html";
    let product_Name = JSON.parse(window.localStorage.getItem("product"));

    alert(product_Name);
  });
});
