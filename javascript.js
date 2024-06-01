document.addEventListener('DOMContentLoaded', (event) => {
    const openBtn = document.getElementById('open-cart');
    openBtn.addEventListener('click', openCart);

    const closeBtn = document.getElementById('close-cart');
    const backdrop = document.querySelector('.backdrop');

    closeBtn.addEventListener('click', closeCart);
    backdrop.addEventListener('click', closeCart);

    updateCounter();
    updateCounter2();
    updateTotal();
    updateCartItemCount(); // Update cart item count on page load
});

// Functions to open and close the cart
function openCart() {
    const cart = document.getElementById('shopping-cart');
    cart.classList.add('open');
    const backdrop = document.querySelector('.backdrop');
    backdrop.style.display = 'block';

    setTimeout(() => {
        backdrop.classList.add('show');
    }, 0);
}

function closeCart() {
    const cart = document.getElementById('shopping-cart');
    cart.classList.remove('open');
    const backdrop = document.querySelector('.backdrop');
    backdrop.classList.remove('show');

    setTimeout(() => { backdrop.style.display = 'none'; }, 500);
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
    const cartItem1 = document.getElementById('cart-item1');
    const cartItem2 = document.getElementById('cart-item2');
    let totalPriceFinal = 0;

    if (!cartItem1.classList.contains('none')) {
        const totalPrice1 = updatePrice1();
        totalPriceFinal += totalPrice1;
    }

    if (!cartItem2.classList.contains('none')) {
        const totalPrice2 = updatePrice2();
        totalPriceFinal += totalPrice2;
    }

    document.getElementById('subtotal-price').innerText = totalPriceFinal.toFixed(2);
    localStorage.setItem('totalPriceFinal', totalPriceFinal);
}

function additem() {
    count++;
    updateCounter();
    updateTotal();
    updateCartItemCount(); // Update cart item count
}

function additem2() {
    count_2++;
    updateCounter2();
    updateTotal();
    updateCartItemCount(); // Update cart item count
}

function removeitem() {
    if (count > 1) {
        count--;
        updateCounter();
        updateTotal();
        updateCartItemCount(); // Update cart item count
    }
}

function removeitem2() {
    if (count_2 > 1) {
        count_2--;
        updateCounter2();
        updateTotal();
        updateCartItemCount(); // Update cart item count
    }
}

// Function to update cart item count and manage visibility of the items-num element
function updateCartItemCount() {
    const cartItem1 = document.getElementById('cart-item1');
    const cartItem2 = document.getElementById('cart-item2');
    const itemsNumElement = document.getElementById('items-num');

    let itemCount = 0;

    if (!cartItem1.classList.contains('none')) {
        itemCount += count;
    }

    if (!cartItem2.classList.contains('none')) {
        itemCount += count_2;
    }

    itemsNumElement.innerText = itemCount;

    if (itemCount === 0) {
        itemsNumElement.classList.add('none');
    } else {
        itemsNumElement.classList.remove('none');
    }
}

// Adding and removing item from cart
document.addEventListener('DOMContentLoaded', (event) => {
    const adding = document.getElementById('add-to-cart1');
    const removing = document.getElementById('trash-can1');

    adding.addEventListener('click', add_item1);
    removing.addEventListener('click', remove_item1);

    loadCartState();
    updateTotal();  // Ensure the total is updated based on the loaded state
    updateCartItemCount(); // Update cart item count based on the loaded state
});

function add_item1() {
    const cart = document.getElementById('cart-item1');
    cart.classList.remove('none');
    saveCartState();
    updateTotal();
    updateCartItemCount(); // Update cart item count
}

function remove_item1() {
    const cart = document.getElementById('cart-item1');
    cart.classList.add('none');
    saveCartState();
    updateTotal();
    updateCartItemCount(); // Update cart item count
}

document.addEventListener('DOMContentLoaded', (event) => {
    const adding2 = document.getElementById('add-to-cart2');
    const removing2 = document.getElementById('trash-can2');

    adding2.addEventListener('click', add_item2);
    removing2.addEventListener('click', remove_item2);

    loadCartState();
    updateTotal();  // Ensure the total is updated based on the loaded state
    updateCartItemCount(); // Update cart item count based on the loaded state
});

function add_item2() {
    const cart = document.getElementById('cart-item2');
    cart.classList.remove('none');
    saveCartState();
    updateTotal();
    updateCartItemCount(); // Update cart item count
}

function remove_item2() {
    const cart = document.getElementById('cart-item2');
    cart.classList.add('none');
    saveCartState();
    updateTotal();
    updateCartItemCount(); // Update cart item count
}

// Function to save the state of cart items to localStorage
function saveCartState() {
    const cartItem1 = document.getElementById('cart-item1');
    const cartItem2 = document.getElementById('cart-item2');
    localStorage.setItem('cartItem1Visible', !cartItem1.classList.contains('none'));
    localStorage.setItem('cartItem2Visible', !cartItem2.classList.contains('none'));
}

// Function to load the state of cart items from localStorage
function loadCartState() {
    const cartItem1Visible = localStorage.getItem('cartItem1Visible') === 'true';
    const cartItem2Visible = localStorage.getItem('cartItem2Visible') === 'true';
    const cartItem1 = document.getElementById('cart-item1');
    const cartItem2 = document.getElementById('cart-item2');
    if (cartItem1Visible) {
        cartItem1.classList.remove('none');
    } else {
        cartItem1.classList.add('none');
    }

    if (cartItem2Visible) {
        cartItem2.classList.remove('none');
    } else {
        cartItem2.classList.add('none');
    }
}
