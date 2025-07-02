// Sample sweet treats data
const sweetTreats = [
    {
        id: 1,
        name: 'Chocolate Cake',
        description: 'Moist chocolate cake with rich frosting',
        price: 14.00,
        image: 'images/chocolate_cake.jpg' // Replace with actual image path
    },
    {
        id: 2,
        name: 'Strawberry Shortcake',
        description: 'Delicious shortcake topped with fresh strawberries',
        price: 14.00,
        image: 'images/strawberry_shortcake.jpg' // Replace with actual image path
    },
    {
        id: 3,
        name: 'Lemon Tart',
        description: 'Zesty lemon tart with a buttery crust',
        price: 14.00,
        image: 'images/lemon_tart.jpg' // Replace with actual image path
    },
    {
        id: 4,
        name: 'Brownie',
        description: 'Fudgy brownie topped with chocolate drizzle',
        price: 14.00,
        image: 'images/brownie.jpg' // Replace with actual image path
    }
];

// Function to display sweet treats
function displaySweetTreats() {
    const container = document.getElementById('sweet-treats-container');
    sweetTreats.forEach(treat => {
        const sweetTreatItem = document.createElement('div');
        sweetTreatItem.classList.add('sweet-treat-item');
        sweetTreatItem.innerHTML = `
            <img src="${treat.image}" alt="${treat.name}">
            <h3>${treat.name}</h3>
            <p>${treat.description}</p>
            <p>Price: R${treat.price.toFixed(2)}</p>
            <button onclick="addToCart(${treat.id})">Add to Cart</button>
        `;
        container.appendChild(sweetTreatItem);
    });
}

// Function to add item to cart
function addToCart(id) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const sweetTreat = sweetTreats.find(t => t.id === id);
    if (sweetTreat) {
        cart.push(sweetTreat);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${sweetTreat.name} has been added to your cart!`);
    }
}

// Function to navigate to cart
function goToCart() {
    window.location.href = '../cart.html'; // Update to the path of your cart page
}

// Function to navigate back to menu
function goToMenu() {
    window.location.href = '../menu.html'; // Update to the path of your menu page
}

// Initialize the display of sweet treats
displaySweetTreats();
