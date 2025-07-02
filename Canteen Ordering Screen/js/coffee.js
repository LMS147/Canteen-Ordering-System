// Sample coffee data
const coffeeItems = [
    {
        id: 1,
        name: 'Espresso',
        description: 'Rich and bold espresso shot.',
        price: 14.00,
        image: 'images/espresso.jpg' // Replace with actual image path
    },
    {
        id: 2,
        name: 'Cappuccino',
        description: 'Smooth cappuccino topped with frothy milk.',
        price: 14.00,
        image: 'images/cappuccino.jpg' // Replace with actual image path
    },
    {
        id: 3,
        name: 'Latte',
        description: 'Creamy latte with a hint of vanilla.',
        price: 14.00,
        image: 'images/latte.jpg' // Replace with actual image path
    },
    {
        id: 4,
        name: 'Americano',
        description: 'Classic Americano made with hot water.',
        price: 14.00,
        image: 'images/americano.jpg' // Replace with actual image path
    },
    {
        id: 5,
        name: 'Mocha',
        description: 'Chocolatey mocha with whipped cream.',
        price: 14.00,
        image: 'images/mocha.jpg' // Replace with actual image path
    },
    {
        id: 6,
        name: 'Flat White',
        description: 'Flat white with velvety microfoam.',
        price: 14.00,
        image: 'images/flat_white.jpg' // Replace with actual image path
    },
    {
        id: 7,
        name: 'Macchiato',
        description: 'Espresso topped with a dollop of foam.',
        price: 14.00,
        image: 'images/macchiato.jpg' // Replace with actual image path
    },
    {
        id: 8,
        name: 'Iced Coffee',
        description: 'Refreshing iced coffee served cold.',
        price: 14.00,
        image: 'images/iced_coffee.jpg' // Replace with actual image path
    },
    {
        id: 9,
        name: 'Café au Lait',
        description: 'Strong coffee mixed with hot milk.',
        price: 14.00,
        image: 'images/cafe_au_lait.jpg' // Replace with actual image path
    },
    {
        id: 10,
        name: 'Affogato',
        description: 'Delicious vanilla ice cream with espresso.',
        price: 14.00,
        image: 'images/affogato.jpg' // Replace with actual image path
    },
    {
        id: 11,
        name: 'Irish Coffee',
        description: 'Coffee with Irish whiskey and cream.',
        price: 14.00,
        image: 'images/irish_coffee.jpg' // Replace with actual image path
    },
    {
        id: 12,
        name: 'Turkish Coffee',
        description: 'Strong and aromatic coffee made in a cezve.',
        price: 14.00,
        image: 'images/turkish_coffee.jpg' // Replace with actual image path
    }
];

// Function to display coffee items
function displayCoffeeItems() {
    const container = document.getElementById('coffee-container');
    coffeeItems.forEach(coffee => {
        const coffeeItem = document.createElement('div');
        coffeeItem.classList.add('coffee-item');
        coffeeItem.innerHTML = `
            <img src="${coffee.image}" alt="${coffee.name}">
            <h3>${coffee.name}</h3>
            <p>${coffee.description}</p>
            <p>Price: R${coffee.price.toFixed(2)}</p>
            <button onclick="addToCart(${coffee.id})">Add to Cart</button>
        `;
        container.appendChild(coffeeItem);
    });
}

// Function to add item to cart
function addToCart(id) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const coffee = coffeeItems.find(c => c.id === id);
    if (coffee) {
        cart.push(coffee);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${coffee.name} has been added to your cart!`);
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

// Initialize the display of coffee items
displayCoffeeItems();
