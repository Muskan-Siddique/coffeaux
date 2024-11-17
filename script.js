let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchform.classList.remove('active');
    cartitem.classList.remove('active');
}

let searchform = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchform.classList.toggle('active');
    navbar.classList.remove('active');
    cartitem.classList.remove('active');
}

let cartitem = document.querySelector('.cart-item-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartitem.classList.toggle('active');
    navbar.classList.remove('active');
    searchform.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchform.classList.remove('active');
    cartitem.classList.remove('active');
}

let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
    loginForm.classList.remove('active');
}