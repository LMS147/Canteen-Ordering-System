// checkout.js

// Function to load cart items and display them on the checkout page
function loadCartItems() {
    const cartItemsContainer = document.getElementById("cartItemsContainer");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cartItemsContainer.innerHTML = "";  // Clear existing items

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    let total = 0;

    cart.forEach(item => {
        const itemElement = document.createElement("div");
        const itemPrice = parseFloat(item.price) || 0;
        const itemQuantity = parseInt(item.quantity) || 1;

        itemElement.innerHTML = `
            <p>${item.name} - R${itemPrice.toFixed(2)} x ${itemQuantity}</p>
        `;

        cartItemsContainer.appendChild(itemElement);
        total += itemPrice * itemQuantity;
    });

    const totalElement = document.createElement("p");
    totalElement.innerHTML = `<strong>Total: R${total.toFixed(2)}</strong>`;
    cartItemsContainer.appendChild(totalElement);
}

// Function to confirm the order
function confirmOrder() {
    const orderType = document.querySelector('input[name="orderType"]:checked').value;
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;

    // Get cart items
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    // Store order details in local storage
    const orderDetails = {
        cart: cartItems,
        orderType: orderType,
        paymentMethod: paymentMethod,
    };
    localStorage.setItem("orderDetails", JSON.stringify(orderDetails));

    // Redirect to confirmation page
    window.location.href = "confirmation.html";
}

// Load cart items on page load
window.onload = loadCartItems;

// Set up event listeners
document.getElementById('confirmOrder').addEventListener('click', confirmOrder);
