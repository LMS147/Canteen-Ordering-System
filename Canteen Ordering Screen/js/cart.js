// Load cart items from localStorage and display them
function loadCartItems() {
    const cartItemsContainer = document.getElementById("cartItemsContainer");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cartItemsContainer.innerHTML = "";  // Clear existing items

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
        document.getElementById("cartCount").textContent = 0;
        document.getElementById("cartTotal").textContent = "R0.00";
        return;
    }

    let total = 0;

    cart.forEach((item, index) => {
        const itemElement = document.createElement("div");
        itemElement.classList.add("cart-item");

        // Ensure item has a valid price and quantity
        const itemPrice = parseFloat(item.price) || 0; // Default to 0 if NaN
        const itemQuantity = parseInt(item.quantity) || 1; // Default to 1 if NaN

        itemElement.innerHTML = `
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p>Price: R${itemPrice.toFixed(2)}</p>
                <div class="quantity-controls">
                    <button onclick="decreaseQuantity(${index})">-</button>
                    <span>${itemQuantity}</span>
                    <button onclick="increaseQuantity(${index})">+</button>
                </div>
                <button class="remove-item" onclick="removeItem(${index})">Remove</button>
            </div>
        `;

        cartItemsContainer.appendChild(itemElement);
        total += itemPrice * itemQuantity; // Update total price
    });

    document.getElementById("cartTotal").textContent = `R${total.toFixed(2)}`;
    document.getElementById("cartCount").textContent = cart.length; // Update cart count
}

// Increase item quantity
function increaseQuantity(index) {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart[index]) {
        cart[index].quantity = (cart[index].quantity || 1) + 1; // Ensure quantity is at least 1
        localStorage.setItem("cart", JSON.stringify(cart));
        loadCartItems();
    }
}

// Decrease item quantity
function decreaseQuantity(index) {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart[index]) {
        if (cart[index].quantity > 1) {
            cart[index].quantity--;
        } else {
            cart.splice(index, 1);  // Remove item if quantity is 1
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        loadCartItems();
    }
}

// Remove item from cart
function removeItem(index) {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart[index]) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        loadCartItems();
    }
}

// Handle checkout
function checkout() {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    
    if (cartItems.length === 0) {
        alert('Your cart is empty. Please add items before checking out.');
        return;
    }
    
    // Redirect to the checkout page
    window.location.href = 'checkout.html'; // Update this path as necessary
}

// Clear cart functionality
function clearCart() {
    localStorage.removeItem('cart');
    loadCartItems();
}

// Load cart items on page load
window.onload = loadCartItems;

// Set up event listeners
document.getElementById('clear-cart').addEventListener('click', clearCart);
document.getElementById('checkout').addEventListener('click', checkout);
