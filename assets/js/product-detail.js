// 
let product_current = JSON.parse(localStorage.getItem('product_current'));
$(".p-detail-img img").attr("src", product_current.img);
$(".p-detail-name").text(product_current.name);
$(".p-detail-price .price-old").text(product_current.price_old);
$(".p-detail-price .price-current").text(product_current.price_current);
$(".p-detail-sold").text(`${product_current.sold} đã bán`);
$(".p-detail-img-list img").attr("src", product_current.img);


// slider products similar
document.querySelector('#products-similar .slider-control-next').onclick = function () {
    const widthCard = document.querySelector('#products-similar .product-card').offsetWidth;
    document.querySelector('#products-similar .slider-container').scrollLeft += widthCard;

}
document.querySelector('#products-similar .slider-control-prev').onclick = function () {
    const widthCard = document.querySelector('#products-similar .product-card').offsetWidth;
    document.querySelector('#products-similar .slider-container').scrollLeft -= widthCard;
}