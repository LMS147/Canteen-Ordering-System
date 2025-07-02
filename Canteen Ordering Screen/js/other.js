// Sample others menu data
const othersItems = [
    {
        id: 1,
        name: 'Chips',
        description: 'Crunchy potato chips with a hint of salt.',
        price: 14.00,
        image: 'images/chips.jpg' // Replace with actual image path
    },
    {
        id: 2,
        name: 'Popcorn',
        description: 'Lightly salted popcorn, perfect for snacking.',
        price: 14.00,
        image: 'images/popcorn.jpg' // Replace with actual image path
    },
    {
        id: 3,
        name: 'Chocolate Bar',
        description: 'Rich chocolate bar for a sweet treat.',
        price: 14.00,
        image: 'images/chocolate_bar.jpg' // Replace with actual image path
    },
    {
        id: 4,
        name: 'Granola Bar',
        description: 'Healthy granola bar packed with nuts and honey.',
        price: 14.00,
        image: 'images/granola_bar.jpg' // Replace with actual image path
    },
    {
        id: 5,
        name: 'Fruit Salad',
        description: 'Fresh mix of seasonal fruits.',
        price: 14.00,
        image: 'images/fruit_salad.jpg' // Replace with actual image path
    },
    {
        id: 6,
        name: 'Trail Mix',
        description: 'A nutritious mix of nuts and dried fruits.',
        price: 14.00,
        image: 'images/trail_mix.jpg' // Replace with actual image path
    }
];

// Function to display other items
function displayOthersItems() {
    const container = document.getElementById('others-container');
    othersItems.forEach(item => {
        const othersItem = document.createElement('div');
        othersItem.classList.add('others-item');
        othersItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p>Price: R${item.price.toFixed(2)}</p>
            <button onclick="addToCart(${item.id})">Add to Cart</button>
        `;
        container.appendChild(othersItem);
    });
}

// Function to add item to cart
function addToCart(id) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const item = othersItems.find(i => i.id === id);
    if (item) {
        cart.push(item);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${item.name} has been added to your cart!`);
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

// Initialize the display of other items
displayOthersItems();
