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
    // Import mongoose
const mongoose = require('mongoose');

// Set up the MongoDB connection
mongoose.connect('mongodb://localhost:27017/myDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB:', err));

// Example of defining a Schema and Model
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  age: Number
});

const User = mongoose.model('User', userSchema);

// Example of creating a new user
const newUser = new User({
  name: 'John Doe',
  email: 'johndoe@example.com',
  age: 30
});

newUser.save()
  .then(() => console.log('User saved'))
  .catch((err) => console.error('Error saving user:', err));
const user = new User({
  name: 'Jane Doe',
  email: 'janedoe@example.com',
  age: 25
});

user.save()
  .then(() => console.log('User created'))
  .catch((err) => console.error('Error:', err));
User.find({ age: { $gt: 20 } })
  .then(users => console.log(users))
  .catch((err) => console.error('Error:', err));
User.updateOne({ email: 'janedoe@example.com' }, { $set: { age: 26 } })
  .then(() => console.log('User updated'))
  .catch((err) => console.error('Error:', err));

});
