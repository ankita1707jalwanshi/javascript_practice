// admin.js

// Constructor function for Product
function Product(name, category, imageUrl, price, gender, sold) {
    this.name = name;
    this.category = category;
    this.imageUrl = imageUrl;
    this.price = price;
    this.gender = gender;
    this.sold = sold;
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const category = document.getElementById('category').value;
    const imageUrl = document.getElementById('image').value;
    const price = document.getElementById('price').value;
    const gender = document.getElementById('gender').value;
    const sold = document.getElementById('sold').checked;

    // Create a new product object
    const newProduct = new Product(name, category, imageUrl, price, gender, sold);

    // Get existing products from local storage
    let products = JSON.parse(localStorage.getItem('Products')) || [];

    // Add new product to the products array
    products.push(newProduct);

    // Store updated products array in local storage
    localStorage.setItem('Products', JSON.stringify(products));

    // Log the product object to the console (for debugging)
    console.log(newProduct);

    // Clear the form
    document.getElementById('productForm').reset();
}

// Attach event listener to the form
document.getElementById('productForm').addEventListener('submit', handleFormSubmit);
