//Opening and Closing
document.addEventListener('DOMContentLoaded', (event) => {
    const openBtn = document.getElementById('open-cart');
    openBtn.addEventListener('click', openCart);

    const closeBtn = document.getElementById('close-cart');
    const backdrop = document.querySelector('.backdrop');

    closeBtn.addEventListener('click', closeCart);
    backdrop.addEventListener('click', closeCart);

// Initialize counters and update total and item count on page load
    updateCounter();
    updateCounter2();
    updateTotal();
    updateCartItemCount();
});

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
    updateCartItemCount();
}

function updatePrice1() {
    const totalPrice1 = item1BasePrice * count;
    document.getElementById('item1-price').innerText = totalPrice1.toFixed(2);
    return totalPrice1;
}

function updateCounter2() {
    document.getElementById('item-2-quant').innerText = count_2;
    localStorage.setItem('count_2', count_2);
    updateCartItemCount();
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
}

function additem2() {
    count_2++;
    updateCounter2();
    updateTotal();
}

function removeitem() {
    if (count > 1) {
        count--;
        updateCounter();
        updateTotal();
    }
}

function removeitem2() {
    if (count_2 > 1) {
        count_2--;
        updateCounter2();
        updateTotal();
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

    const noitem = document.getElementById('no-item');
    if (itemCount >= 1) {
        noitem.classList.add('none');
    }
    if (itemCount === 0) {
        noitem.classList.remove('none');
    }
}

// Adding and removing item from cart
document.addEventListener('DOMContentLoaded', (event) => {
    const adding1 = document.getElementById('add-to-cart1');
    const removing1 = document.getElementById('trash-can1');
   
    adding1.addEventListener('click', add_item1);
    removing1.addEventListener('click', remove_item1);

    const adding2 = document.getElementById('add-to-cart2');
    const removing2 = document.getElementById('trash-can2');

    adding2.addEventListener('click', add_item2);
    removing2.addEventListener('click', remove_item2);

    // Load the cart state on page load
    loadCartState();
    updateTotal();  // Ensure the total is updated based on the loaded state
    updateCartItemCount();
});

function add_item1() {
    const cart = document.getElementById('cart-item1');
    cart.classList.remove('none');
    saveCartState();
    updateTotal();
    updateCartItemCount();
}

function remove_item1() {
    const cart = document.getElementById('cart-item1');
    cart.classList.add('none');
    count = 1; // Reset count to 1
    localStorage.setItem('count', count);
    updateCounter();
    saveCartState();
    updateTotal();
    updateCartItemCount();
}

function add_item2() {
    const cart = document.getElementById('cart-item2');
    cart.classList.remove('none');
    saveCartState();
    updateTotal();
    updateCartItemCount();
}

function remove_item2() {
    const cart = document.getElementById('cart-item2');
    cart.classList.add('none');
    count_2 = 1; // Reset count_2 to 1
    localStorage.setItem('count_2', count_2);
    updateCounter2();
    saveCartState();
    updateTotal();
    updateCartItemCount();
}

function saveCartState() {
    const cartItem1 = document.getElementById('cart-item1');
    const cartItem2 = document.getElementById('cart-item2');
    localStorage.setItem('cartItem1Visible', !cartItem1.classList.contains('none'));
    localStorage.setItem('cartItem2Visible', !cartItem2.classList.contains('none'));
}

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


// validating user inputs on checkout page

function checkInput(){
    var inputs = document.querySelectorAll('input');
    for (i in inputs){
        if (i.value === "" || i.value == null){
            alert ("There are required fields that are not filled in.");
            return;
        }else{
            location.href='ordersummary.html';
        }
    }
    
}; 
