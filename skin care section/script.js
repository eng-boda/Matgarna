let cart = [];

function addToCart(id, name, price) {
    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.qty += 1;
    } else {
        cart.push({ id, name, price, qty: 1 });
    }
    updateCartDisplay();
}


function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const totalPrice = document.getElementById('totalPrice');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.qty;
        total += itemTotal;

        const li = document.createElement('li');
        li.innerHTML = `
            ${item.name} - ${item.price} × 
            <input type="number" value="${item.qty}" min="1" data-index="${index}" class="qty-input">
            = ${itemTotal} 
            <button data-index="${index}" class="remove-btn"> x </button>
        `;
        cartItems.appendChild(li);
    });

    totalPrice.textContent = total;
}


document.addEventListener('input', function(e) {
    if (e.target.classList.contains('qty-input')) {
        const index = e.target.getAttribute('data-index');
        const newQty = parseInt(e.target.value);
        if (newQty >= 1) {
            cart[index].qty = newQty;
            updateCartDisplay();
        }
    }
});

document.addEventListener('click', function(e) {
    if (e.target.classList.contains('remove-btn')) {
        const index = e.target.getAttribute('data-index');
        cart.splice(index, 1);
        updateCartDisplay();
    }
});