const cartMenu = document.querySelector(".cart");
const masPopulares = document.querySelector(".section");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const saveLocalStorage = (cartList) => {
  localStorage.setItem("cart", JSON.stringify(cartList));
};