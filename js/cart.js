
let products_items = document.getElementById("product-table");
let products = [];

if (localStorage.getItem('products')) {
    products = JSON.parse(localStorage.getItem('products'));
    console.log(products);
    loadProducts();
}

function loadProducts() {
    let productsContainer = ``;
    for (let i = 0; i < products.length; i++) {
        productsContainer += `
        <tr data-index="${i}">
            <td><img src="${products[i].img}" class="product-image" style="width: 50px; height: auto;"></td>
            <td>${products[i].name}</td>
            <td><span class="color-indicator" style="background-color: ${products[i].color}; width: 20px; height: 20px; display: inline-block;  border-radius:50% ; margin-left:30px"></span></td>
            <td><input type="number" value="${products[i].quantity}" class="quantity-input" style="width: 50px;"></td>
            <td>$${products[i].price}</td>
            <td>$${(products[i].price * products[i].quantity).toFixed(2)}</td>
            <td>
                <button class="update-btn">Update</button>
                <button class="delete-btn">Delete</button>
            </td>
        </tr>
        `;
    }
    products_items.innerHTML = productsContainer;
    addEventListeners();
}

function addEventListeners() {
    const updateButtons = document.querySelectorAll(".update-btn");
    const deleteButtons = document.querySelectorAll(".delete-btn");

    updateButtons.forEach((button, index) => {
        button.addEventListener("click", function() {
            const quantityInput = document.querySelector(`tr[data-index="${index}"] .quantity-input`).value;
            updateProduct(index, quantityInput);
        });
    });

    deleteButtons.forEach((button, index) => {
        button.addEventListener("click", function() {
            deleteProduct(index);
        });
    });
}

function updateProduct(index, newQuantity) {
    if (newQuantity > 0) {
        products[index].quantity = newQuantity;
        localStorage.setItem('products', JSON.stringify(products));
        loadProducts();
    } else {
        alert("qunatity must be greater than 0");
    }
}

function deleteProduct(index) {
    products.splice(index, 1);
    localStorage.setItem('products', JSON.stringify(products));
    loadProducts();
}

