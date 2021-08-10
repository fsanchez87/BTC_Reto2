
const drag = (event) => {
  event.dataTransfer.setData("text", event.target.id);
};

const allowDrop = (event) => {
  event.preventDefault();
};

const drop = (event) => {
  event.preventDefault();
  let data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));

  updateCart();
};

const updateCart = () => {
  let total = 0.0;
  let cart_products = document.querySelectorAll(".cart ul li");

  for (let i = 0; i < cart_products.length; i++) {
    const product = cart_products[i];
    let price = product.getAttribute("data-price");

    let sub_total = parseFloat(price);
    total += sub_total;
  }

  document.querySelectorAll(".ticket span.ticket__total")[0].innerHTML = total.toFixed(2) + "€";
};
