// Sample pastries data
const pastries = [
    {
        id: 1,
        name: 'Croissant',
        description: 'Flaky and buttery croissant',
        price: 14.00,
        image: 'images/croissant.jpg' // Replace with actual image path
    },
    {
        id: 2,
        name: 'Danish',
        description: 'Sweet pastry with cream cheese filling',
        price: 14.00,
        image: 'images/danish.jpg' // Replace with actual image path
    },
    {
        id: 3,
        name: 'Apple Tart',
        description: 'Freshly baked apple tart',
        price: 14.00,
        image: 'images/apple_tart.jpg' // Replace with actual image path
    },
    {
        id: 4,
        name: 'Chocolate Eclair',
        description: 'Delicious eclair filled with chocolate cream',
        price: 14.00,
        image: 'images/eclair.jpg' //  image path
    }
];

// Function to display pastries
function displayPastries() {
    const container = document.getElementById('pastries-container');
    pastries.forEach(pastry => {
        const pastryItem = document.createElement('div');
        pastryItem.classList.add('pastry-item');
        pastryItem.innerHTML = `
            <img src="${pastry.image}" alt="${pastry.name}">
            <h3>${pastry.name}</h3>
            <p>${pastry.description}</p>
            <p>Price: R${pastry.price.toFixed(2)}</p>
            <button onclick="addToCart(${pastry.id})">Add to Cart</button>
        `;
        container.appendChild(pastryItem);
    });
}

// Function to add item to cart
function addToCart(id) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const pastry = pastries.find(p => p.id === id);
    if (pastry) {
        cart.push(pastry);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${pastry.name} has been added to your cart!`);
    }
}

// Function to navigate to cart
function goToCart() {
    window.location.href = '../cart.html'; //  path of your cart page
}

// Function to navigate back to menu
function goToMenu() {
    window.location.href = '../menu.html'; // Update to the path of your menu page
}

// Initialize the display of pastries
displayPastries();
