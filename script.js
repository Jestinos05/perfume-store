// Initialize cart
let cartItems = [];

// Add to Cart Functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const name = button.dataset.name;
        const price = button.dataset.price;
        const item = { name, price };
        cartItems.push(item);
        alert(`${name} added to cart.`);
    });
});

// Account Creation Form
document.getElementById('account-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simulate account creation logic
    alert(`Account created successfully for ${fullName} with email: ${email}`);

    // Clear the form after submission
    document.getElementById('account-form').reset();

    // Redirect to checkout page
    window.location.href = "checkout.html";
});

// Checkout Form
document.getElementById('checkout-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const addressLine1 = document.getElementById('addressLine1').value;
    const city = document.getElementById('city').value;
    const postalCode = document.getElementById('postalCode').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvc = document.getElementById('cvc').value;

    // Simulate payment processing logic
    alert('Payment successful! Your order is on its way.');

    // Clear the form after submission
    document.getElementById('checkout-form').reset();

    // Clear the cart
    cartItems = [];

    // Redirect to the homepage or a confirmation page
    window.location.href = "index.html";
});
