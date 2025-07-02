// Sample tea data
const teaItems = [
    {
        id: 1,
        name: 'Green Tea',
        description: 'Refreshing green tea with natural antioxidants.',
        price: 14.00,
        image: 'images/green_tea.jpg' // Replace with actual image path
    },
    {
        id: 2,
        name: 'Earl Grey',
        description: 'Classic Earl Grey with bergamot flavor.',
        price: 14.00,
        image: 'images/earl_grey.jpg' // Replace with actual image path
    },
    {
        id: 3,
        name: 'Chamomile',
        description: 'Calming chamomile tea, perfect for relaxation.',
        price: 14.00,
        image: 'images/chamomile.jpg' // Replace with actual image path
    },
    {
        id: 4,
        name: 'Peppermint Tea',
        description: 'Refreshing peppermint tea with a cool finish.',
        price: 14.00,
        image: 'images/peppermint.jpg' // Replace with actual image path
    }
];

// Function to display tea items
function displayTeaItems() {
    const container = document.getElementById('tea-container');
    teaItems.forEach(tea => {
        const teaItem = document.createElement('div');
        teaItem.classList.add('tea-item');
        teaItem.innerHTML = `
            <img src="${tea.image}" alt="${tea.name}">
            <h3>${tea.name}</h3>
            <p>${tea.description}</p>
            <p>Price: R${tea.price.toFixed(2)}</p>
            <button onclick="addToCart(${tea.id})">Add to Cart</button>
        `;
        container.appendChild(teaItem);
    });
}

// Function to add item to cart
function addToCart(id) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const tea = teaItems.find(t => t.id === id);
    if (tea) {
        cart.push(tea);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${tea.name} has been added to your cart!`);
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

// Initialize the display of tea items
displayTeaItems();
