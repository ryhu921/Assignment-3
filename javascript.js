function expandList() {
    document.getElementById("suggestions-list").classList.remove("fold");
}

function foldList() {
    setTimeout(function() {
        document.getElementById("suggestions-list").classList.add("fold");
    }, 50);
}

function getKeyword(keyword) {
    document.querySelector(".search-input").value = keyword;
}

function redirect(key) {
    if (key.keyCode === 13) {
        location.href = 'pages/productlist.html';
    }
}


//open cart and close cart

document.addEventListener('DOMContentLoaded', (event) => {
    const openBtn = document.getElementById('open-cart');

    openBtn.addEventListener('click', openCart);
});

document.addEventListener('DOMContentLoaded', (event) => {
    const openBtn = document.getElementById('close-cart');

    openBtn.addEventListener('click', closeCart);
});


function openCart() {
    const cart = document.getElementById('shopping-cart');
    cart.classList.add('open');
}

function closeCart() {
    const cart = document.getElementById('shopping-cart');
    cart.classList.remove('open');
}
