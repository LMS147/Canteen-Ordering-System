// confirmation.js

// Function to generate a random order number
function generateOrderNumber() {
    return Math.floor(100000 + Math.random() * 900000); // Generates a 6-digit number
}

// Function to load order details from local storage
function loadOrderDetails() {
    const orderDetails = JSON.parse(localStorage.getItem("orderDetails")) || {};
    
    const orderSummaryContainer = document.getElementById("orderSummaryContainer");
    const pickupTimeElement = document.getElementById("pickupTime");
    const orderNumberElement = document.getElementById("orderNumber");
    
    if (orderDetails.cart && orderDetails.cart.length > 0) {
        orderDetails.cart.forEach(item => {
            const itemElement = document.createElement("p");
            const itemPrice = parseFloat(item.price) || 0;
            const itemQuantity = parseInt(item.quantity) || 1;
            itemElement.textContent = `${item.name} - R${itemPrice.toFixed(2)} x ${itemQuantity}`;
            orderSummaryContainer.appendChild(itemElement);
        });
        
        const total = orderDetails.cart.reduce((sum, item) => sum + (parseFloat(item.price) * parseInt(item.quantity)), 0);
        orderSummaryContainer.appendChild(document.createElement("hr"));
        const totalElement = document.createElement("p");
        totalElement.innerHTML = `<strong>Total: R${total.toFixed(2)}</strong>`;
        orderSummaryContainer.appendChild(totalElement);
    } else {
        orderSummaryContainer.innerHTML = "<p>Your cart is empty.</p>";
    }

    // Set estimated pickup time
    const estimatedPickupTime = new Date();
    estimatedPickupTime.setMinutes(estimatedPickupTime.getMinutes() + 15); // 15 minutes from now
    pickupTimeElement.textContent = estimatedPickupTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

    // Generate and display order number
    const orderNumber = generateOrderNumber();
    orderNumberElement.textContent = orderNumber;

    // Generate QR code
    $('#qrcode').empty(); // Clear any existing QR code
    $('#qrcode').qrcode({
        text: `Order Number: ${orderNumber}\nTotal: R${total.toFixed(2)}`,
        width: 128,
        height: 128
    });
}

// Return to home button functionality
document.getElementById('returnHome').addEventListener('click', () => {
    window.location.href = 'index.html'; // Change this to your home page
});

// Load order details on page load
window.onload = loadOrderDetails;
