window.addEventListener("DOMContentLoaded", init);

const productURL = "https://kea-alt-del.dk/t7/api/products?limit=50&start=10";

let productTemplate;
let productContainer;

function init() {
  console.log("init");

  productTemplate = document.querySelector("template.product_template");
  console.log("productTemplate", productTemplate);

  productContainer = document.querySelector(".product_container");
  console.log("product_container", productContainer);

  fetch(productURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      showProduct(json);
    });
}

function showProduct(productJSON) {
  let productClone;

  productJSON.forEach((product) => {
    console.log("product", product);
    productClone = document.importNode(productTemplate.content, true);
    // productClone.querySelector(".product_image").src = product.image_url;
    // productClone.querySelector(
    // ".product_image"
    // ).alt = `Picture of a ${product.name} product`;
    productClone.querySelector(".product_name").textContent = product.name;
    productClone.querySelector(".product_price").textContent = product.price;
    productClone.querySelector(".product_discount").textContent =
      product.discount;
    productContainer.appendChild(productClone);
  });
}
