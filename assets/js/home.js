// slider box best seller
document.querySelector('#box-best-seller .slider-control-next').onclick = function() {
    const widthCard = document.querySelector('#box-best-seller .product-card').offsetWidth;
    document.querySelector('#box-best-seller .slider-container').scrollLeft += widthCard;
    
}
document.querySelector('#box-best-seller .slider-control-prev').onclick = function() {
    const widthCard = document.querySelector('#box-best-seller .product-card').offsetWidth;
    document.querySelector('#box-best-seller .slider-container').scrollLeft -= widthCard;
}

// slider products latest
document.querySelector('#products-latest .slider-control-next').onclick = function() {
    const widthCard = document.querySelector('#products-latest .product-card').offsetWidth;
    document.querySelector('#products-latest .slider-container').scrollLeft += widthCard;
    
}

document.querySelector('#products-latest .slider-control-prev').onclick = function() {
    const widthCard = document.querySelector('#products-latest .product-card').offsetWidth;
    document.querySelector('#products-latest .slider-container').scrollLeft -= widthCard;
}

// slider blogs
document.querySelector('#box-blogs .slider-control-next').onclick = function() {
    const widthCard = document.querySelector('#box-blogs .blog-card').offsetWidth;
    document.querySelector('#box-blogs .slider-container').scrollLeft += widthCard;
    
}

document.querySelector('#box-blogs .slider-control-prev').onclick = function() {
    const widthCard = document.querySelector('#box-blogs .blog-card').offsetWidth;
    document.querySelector('#box-blogs .slider-container').scrollLeft -= widthCard;
}

// navbar dropdown menu
document.querySelector("#dropdownMenuLink").addEventListener("click", function() {
    document.querySelector(".dropdown-menu").classList.add("active");
});

document.querySelector(".dropdown-menu").addEventListener("", function() {
    document.querySelector(".dropdown-menu").classList.remove("active");
});


