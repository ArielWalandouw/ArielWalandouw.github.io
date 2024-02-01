// script.js

// Sample product data
const products = [
    { id: 1, name: 'Apple', price: 1.00 },
    { id: 2, name: 'Banana', price: 0.75 },
    { id: 3, name: 'Carrot', price: 0.50 },
    // Add more products as needed
];

const cart = [];

function displayProducts() {
    const productsSection = document.getElementById('products');
    
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsSection.appendChild(productElement);
    });
}

function addToCart(productId) {
    const selectedProduct = products.find(product => product.id === productId);
    cart.push(selectedProduct);
    
    // Update the cart display
    displayCart();
}

function displayCart() {
    const cartItemsSection = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');

    // Clear the cart display
    cartItemsSection.innerHTML = '';

    // Display each item in the cart
    cart.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsSection.appendChild(cartItem);
    });

    // Calculate and display the total
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    totalElement.textContent = total.toFixed(2);
}

function checkout() {
    alert('Thank you for shopping with us!'); // In a real scenario, you would implement a payment system.
    cart.length = 0; // Clear the cart after checkout
    displayCart();
}

// Initialize the page
displayProducts();
displayCart();


// Update the existing script.js file with the following code

function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Display the submitted information (in a real scenario, you would send this data to a server)
    alert(`Thank you for your message!\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`);

    // Clear the form
    document.getElementById('contact-form').reset();
}
