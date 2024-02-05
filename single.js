window.addEventListener("DOMContentLoaded", init);

const productURL = `https://kea-alt-del.dk/t7/api/products/${id}`;

function init() {
  console.log("init");

  fetch(productURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      showProduct(json);
    });
}

function showProduct(product) {
  document.querySelector("h2").textContent = product.productdisplayname;
  document.querySelector("p").textContent = product.price;
  const imagePath = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  document.querySelector("img").src = imagePath;
}
