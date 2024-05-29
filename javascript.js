
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


// Item Quantity

let count = parseInt(localStorage.getItem('count')) || 1;
let count_2 = parseInt(localStorage.getItem('count_2')) || 1;

const item1BasePrice = 49.00;
const item2BasePrice = 44.00;

function updateCounter() {
document.getElementById('item-1-quant').innerText = count;
localStorage.setItem('count', count);
}

function updatePrice1() {
const totalPrice1 = item1BasePrice * count;
document.getElementById('item1-price').innerText = totalPrice1.toFixed(2);
return totalPrice1;
}

function updateCounter2() {
document.getElementById('item-2-quant').innerText = count_2;
localStorage.setItem('count_2', count_2);
}

function updatePrice2() {
const totalPrice2 = item2BasePrice * count_2;
document.getElementById('item2-price').innerText = totalPrice2.toFixed(2);
return totalPrice2;
}

function updateTotal() {
const totalPrice1 = updatePrice1();
const totalPrice2 = updatePrice2();
const totalPriceFinal = totalPrice1 + totalPrice2;
document.getElementById('subtotal-price').innerText = totalPriceFinal.toFixed(2);
localStorage.setItem('totalPriceFinal', totalPriceFinal);
}

function additem() {
count++;
updateCounter();
updateTotal();
}

function additem2() {
count_2++;
updateCounter2();
updateTotal();
}

function removeitem() {
if (count >= 2) {
count--;
updateCounter();
updateTotal();
}
}

function removeitem2() {
if (count_2 >= 2) {
count_2--;
updateCounter2();
updateTotal();
}
}

document.addEventListener('DOMContentLoaded', () => {
updateCounter();
updateCounter2();
updateTotal();
});


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

document.addEventListener('DOMContentLoaded', (event) => {
    const adding = document.getElementById('add-to-cart1');
    const removing = document.getElementById('trash-can1');
    
    const cart = document.getElementById('cart-item1');

    // Check if the item is already added or removed from the cart
    const itemAdded = localStorage.getItem('itemAdded');
    const itemRemoved = localStorage.getItem('itemRemoved');

    // Show or hide the cart based on the item's state
    if (itemAdded === 'true') {
        cart.classList.remove('none');
    } else if (itemRemoved === 'true') {
        cart.classList.add('none');
    }

    // Adding an item to the cart
    adding.addEventListener('click', () => {
        cart.classList.remove('none');
        localStorage.setItem('itemAdded', 'true');
        localStorage.removeItem('itemRemoved'); // Remove 'itemRemoved' flag if an item is added back
    });

    // Removing an item from the cart
    removing.addEventListener('click', () => {
        cart.classList.add('none');
        localStorage.setItem('itemRemoved', 'true');
        localStorage.removeItem('itemAdded'); // Remove 'itemAdded' flag if an item is removed
    });
});


