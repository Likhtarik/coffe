let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
      navbar.classList.toggle('active');
      searchForm.classList.remove('active3');
      cartItem.classList.remove('active2');
};
//
let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () => {
      cartItem.classList.toggle('active2');
      navbar.classList.remove('active');
      searchForm.classList.remove('active3');
};
//
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
      searchForm.classList.toggle('active3');
      navbar.classList.remove('active');
      cartItem.classList.remove('active2');
};

window.onscroll = () => {
      navbar.classList.remove('active');
      cartItem.classList.remove('active2');
      searchForm.classList.remove('active3');
};
