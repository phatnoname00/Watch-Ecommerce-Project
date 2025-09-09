// Hiển thị danh sách sản phẩm
function showProducts() {
    let products = JSON.parse(localStorage.getItem('products'));
    var product_card = '';
    for (var i = 0; i < products.length; i++) {
        var product = products[i];
        product_card += `
    <div class="product-card">
                                <a href="product-detail.html">                         
                                    <img class="product-img" src="${product.img}" alt="${product.name}" onclick="detailProduct(${product.id})">
                                </a>
                                <div class="product-body">
                                    <h6 class="product-title">
                                        <a href="product-detail.html" onclick="detailProduct(${product.id})">${product.name}</a>
                                    </h6>
                                    <div class="product-price">
                                        <span class="product-price-old">${product.price_old}</span>
                                        <span class="product-price-current">${product.price_current}</span>
                                    </div>
                                    <div class="product-review">
                                        <div class="product-rate">
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                        </div>
                                        <span class="product-sold">${product.sold} đã bán</span>
                                    </div>
                                    <ul class="product-icons-list">
                                        <li><a href="#"><i class="fa-regular fa-heart"></i></a></li>
                                        <li><a href="product-detail.html" onclick="detailProduct(${product.id})"><i class="fa-regular fa-eye"></i></a></li>
                                    </ul>
                                    <div class="product-cart">
                                        <a href="cart.html" class="product-cart-link"><i
                                                class="fa-solid fa-cart-shopping"></i></a>
                                    </div>
                                </div>
                            </div>
    `;
    }
    return product_card;
}

$("#slider-best-seller").html(showProducts);

$("#slider-products-latest").html(showProducts);

$("#slider-products-similar").html(showProducts);

$("#products-list").html(showProducts);

function detailProduct(index) {
    let products = JSON.parse(localStorage.getItem('products'));
    let infoProduct = products.find(sp => {
        return sp.id === index;
    })
    var product = {
        id: infoProduct.id,
        name: infoProduct.name,
        price_old: infoProduct.price_old,
        price_current: infoProduct.price_current,
        img: infoProduct.img,
        status: infoProduct.status,
        sold: infoProduct.sold
    }
    localStorage.setItem('product_current', JSON.stringify(product));
}

function increasingNumber(e) {
    let quantity = e.parentNode.querySelector('.number');
    if (parseInt(quantity.value) < quantity.max) {
        quantity.value = parseInt(quantity.value) + 1;
    } else {
        quantity.value = quantity.max;
    }
}

function decreasingNumber(e) {
    let quantity = e.parentNode.querySelector('.number');
    if (quantity.value > quantity.min) {
        quantity.value = parseInt(quantity.value) - 1;
    } else {
        quantity.value = quantity.min;
    }
}

function calcTotal() {
    var quantity = parseFloat($(".number").val());
    var price = parseFloat($(".product-price span").text());
    var total = quantity * price;
    $(".products-cart .product-total").text(total.toString());
}

$(".checkout-btn").click(function () {
    alert("Đặt hàng thành công");
    window.location.href = "index.html";
});