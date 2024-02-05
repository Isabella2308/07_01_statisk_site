fetch("https://kea-alt-del.dk/t7/api/products/1")
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    showProduct(json);
  });

function showProduct(productJSON) {
  let productClone;

  productClone.querySelector("h2").textContent = data.name;
  productClone.querySelector(".product_price").textContent = product.price;
  productClone.querySelector(".product_discount").textContent =
    product.discount;
  productContainer.appendChild(productClone);
}
