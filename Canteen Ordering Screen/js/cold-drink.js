// Sample cold drink data
const drinkItems = [
    {
        id: 1,
        name: 'Iced Coffee',
        description: 'Refreshing iced coffee topped with cream.',
        price: 14.00,
        image: 'images/iced_coffee.jpg' // Replace with actual image path
    },
    {
        id: 2,
        name: 'Lemonade',
        description: 'Homemade lemonade with a hint of mint.',
        price: 14.00,
        image: 'images/lemonade.jpg' // Replace with actual image path
    },
    {
        id: 3,
        name: 'Fruit Punch',
        description: 'A mix of fresh fruit juices, chilled and delicious.',
        price: 14.00,
        image: 'images/fruit_punch.jpg' // Replace with actual image path
    },
    {
        id: 4,
        name: 'Iced Tea',
        description: 'Chilled tea with lemon for a refreshing taste.',
        price: 14.00,
        image: 'images/iced_tea.jpg' // Replace with actual image path
    },
    {
        id: 5,
        name: 'Smoothie',
        description: 'Fruity smoothie with yogurt and honey.',
        price: 14.00,
        image: 'images/smoothie.jpg' // Replace with actual image path
    },
    {
        id: 6,
        name: 'Sparkling Water',
        description: 'Refreshing sparkling water with a twist of lime.',
        price: 14.00,
        image: 'images/sparkling_water.jpg' // Replace with actual image path
    }
];

// Function to display drink items
function displayDrinkItems() {
    const container = document.getElementById('drink-container');
    drinkItems.forEach(drink => {
        const drinkItem = document.createElement('div');
        drinkItem.classList.add('drink-item');
        drinkItem.innerHTML = `
            <img src="${drink.image}" alt="${drink.name}">
            <h3>${drink.name}</h3>
            <p>${drink.description}</p>
            <p>Price: R${drink.price.toFixed(2)}</p>
            <button onclick="addToCart(${drink.id})">Add to Cart</button>
        `;
        container.appendChild(drinkItem);
    });
}

// Function to add item to cart
function addToCart(id) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const drink = drinkItems.find(d => d.id === id);
    if (drink) {
        cart.push(drink);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${drink.name} has been added to your cart!`);
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

// Initialize the display of drink items
displayDrinkItems();
