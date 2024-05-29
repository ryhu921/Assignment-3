const ITEMS = [
    {
        id: 1,
        name: 'A Plague Tale: Innocence',
        price: 49,
        image: 'assets/product-list/a-plague-tale-innocence.png',
        qty: 1,
    },
    {
        id: 2,
        name: 'A Plague Tale: Requiem',
        price: 44,
        image: 'assets/product-list/a-plague-tale-requiem.png',
        qty: 1,
    },
]

const cartItems = document.querySelector('.cart-items')

const cart_data = [ {
    id: 1,
    name: 'A Plague Tale: Innocence',
    price: 49,
    image: 'assets/product-list/a-plague-tale-innocence.png',
    qty: 1,
},]

renderCartItems()

function renderCartItems() {
    cart_data.forEach(item => {
        const cartItem = document.createElement('div')
        cartItem.classList.add('cart_item')
        cartItem.innerHTML = '<div class="item-img"><img src="assets/product-list/a-plague-tale-innocence.png" alt="a-plague-tale-innocence"></div><div class="item-details shopping-cart-game flex-col"><div class="flex-row space-between max-margin-bottom vert-center"><p>A Plague Tale: Innocence</p><div class="remove-item"><img src="assets/shopping-cart/trashcan-icon.svg" alt="trashcan-icon"></div></div><div class="flex-row space-between align-bottom"><div class="quantity"><img src="assets/shopping-cart/minus-icon.svg" alt="minus-icon"><span>1</span><img src="assets/shopping-cart/add-icon.svg" alt="add-icon"></div><p>$49.00</p></div></div>'

        // cartItems.appendChild(cartItem)
    })
}


//open and closing cart

document.addEventListener('DOMContentLoaded', (event) => {
    const openBtn = document.getElementById('open-cart');

    openBtn.addEventListener('click', openCart);
});

document.addEventListener('DOMContentLoaded', (event) => {
    const openBtn = document.getElementById('close-cart');
    const backdrop = document.querySelector('.backdrop')

    openBtn.addEventListener('click', closeCart);
    backdrop.addEventListener('click', closeCart);
});


function openCart() {
    const cart = document.getElementById('shopping-cart');
    cart.classList.add('open');
    const backdrop = document.querySelector('.backdrop')
    backdrop.style.display = 'block'

    setTimeout(() => {
        backdrop.classList.add('show')
    }, 0)
}

function closeCart() {
    const cart = document.getElementById('shopping-cart');
    cart.classList.remove('open');
    const backdrop = document.querySelector('.backdrop')
    backdrop.classList.remove('show')

    setTimeout(() => {backdrop.style.display = 'none'}, 500)
}



// search bar

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