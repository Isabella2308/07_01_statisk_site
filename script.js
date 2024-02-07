window.addEventListener("DOMContentLoaded", init);

const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

let productTemplate;
let productContainer;

function init() {
  productTemplate = document.querySelector("template.product_template");
  productContainer = document.querySelector(".product_container");

  fetch("https://kea-alt-del.dk/t7/api/products?category=" + category)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      showProduct(json);
    });
}

function showProduct(productsJSON) {
  productsJSON.forEach((produkt) => {
    const productClone = document.importNode(productTemplate.content, true);

    productClone.querySelector("a").href = `single.html?id=${produkt.id}`;
    productClone.querySelector(".product_image").src = `https://kea-alt-del.dk/t7/images/webp/640/${produkt.id}.webp`;
    productClone.querySelector(".product_name").textContent = produkt.productdisplayname;
    productClone.querySelector(".product_brand").textContent = produkt.brandname;
    productClone.querySelector(".product_price span").textContent = produkt.price;

    if (produkt.discount) {
      productClone.querySelector(".product_price").classList.add("line_trough");
      productClone.querySelector(".product_discount").classList.remove("hide");
      productClone.querySelector(".product_discount_percent span").textContent = produkt.discount;

      productClone.querySelector(".product_out_badge").classList.remove("hide");
    }

    productClone.querySelector(".read_more").setAttribute("href", `product.html?id=`);

    productContainer.appendChild(productClone);
  });
}
