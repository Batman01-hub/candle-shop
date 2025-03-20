let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('checkout-btn');

    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
    });

    cartCount.textContent = cart.length;
    cartTotal.textContent = total.toFixed(2);
    checkoutBtn.disabled = cart.length === 0; // Enable button only if cart has items
}

function showPayment() {
    document.getElementById('cart').style.display = 'none';
    document.getElementById('payment').style.display = 'block';

    // Simulate payment submission (for now, just logs to console)
    const form = document.getElementById('payment-form');
    form.onsubmit = function(event) {
        event.preventDefault();
        console.log('Payment submitted:', {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            card: document.getElementById('card').value,
            expiry: document.getElementById('expiry').value,
            cvv: document.getElementById('cvv').value,
            total: total
        });
        alert('Payment successful! (This is a demo)');
        cart = [];
        total = 0;
        updateCart();
        hidePayment();
        form.reset();
    };
}

function hidePayment() {
    document.getElementById('payment').style.display = 'none';
    document.getElementById('cart').style.display = 'block';
}
