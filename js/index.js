
let proList = document.querySelectorAll(".deal-product");
let products = JSON.parse(localStorage.getItem('products')) || [];
let pro = {};

for (let i = 0; i < proList.length; i++) {
    proList[i].addEventListener("click", function(e) {
        if (e.target.tagName === "BUTTON" && e.target.innerText === "Add To Cart") {
            const imgSrc = this.querySelector(".img-product img").getAttribute("src");
            const productInfo = this.querySelector(".product-info-deal");
            const price = productInfo.querySelector("h3").innerText.slice(1);
            const name = productInfo.querySelector("h2").innerText;

            pro = {
                img: imgSrc,
                name: name,
                color: "#FF6347",
                quantity: 1,
                price: price
            };
            addProduct(pro);
        }
    });
}

function addProduct(product) {
    const newProduct = {
        img: product.img,
        name: product.name,
        color: product.color,
        quantity: product.quantity,
        price: product.price
    };

    products.push(newProduct);
    localStorage.setItem('products', JSON.stringify(products));
    console.log(products);
}
document.addEventListener('DOMContentLoaded', function() {
    let cartCount = 0; 
    const cartCountElement = document.querySelector('.cart-count'); 

    document.querySelector('.deel-btn').addEventListener('click', function() {
        cartCount++;
        cartCountElement.textContent = cartCount;

       
        Swal.fire({
            title: 'The product has been added to the cart!',
            text: 'The product has been added successfully.',
            icon: 'success',
            confirmButtonText: 'OK',
            confirmButtonColor: '#247ba0' 
        });
    });
});

