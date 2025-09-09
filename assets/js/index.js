'use strict';

/* _____BOX BEST SELLER_____ */
document.querySelector('#box-best-seller .slider-control-next').onclick = function() {
    const widthItem = document.querySelector('#box-best-seller .product-item').offsetWidth;
    document.querySelector('#box-best-seller .products-container').scrollLeft += widthItem;
}
document.querySelector('#box-best-seller .slider-control-prev').onclick = function() {
    const widthItem = document.querySelector('#box-best-seller .product-item').offsetWidth;
    document.querySelector('#box-best-seller .products-container').scrollLeft -= widthItem;
}

/* _____BOX BLOGS_____ */
document.querySelector('#box-blogs .slider-control-next').onclick = function() {
    const widthItem = document.querySelector('#box-blogs .blog-item').offsetWidth;
    document.querySelector('#box-blogs .blogs-container').scrollLeft += widthItem;
}
document.querySelector('#box-blogs .slider-control-prev').onclick = function() {
    const widthItem = document.querySelector('#box-blogs .blog-item').offsetWidth;
    document.querySelector('#box-blogs .blogs-container').scrollLeft -= widthItem;
}


/* _____MOBILE MENU _____ */

const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

    // mobile menu function
    const mobileMenuCloseFunc = function () {
        mobileMenu[i].classList.remove('active');
        overlay.classList.remove('active');
    }

    mobileMenuOpenBtn[i].addEventListener('click', function () {
        mobileMenu[i].classList.add('active');
        overlay.classList.add('active');
    });

    mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
    overlay.addEventListener('click', mobileMenuCloseFunc);
}

/* _____ACCORDION MENU _____ */

const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {
    accordionBtn[i].addEventListener('click', function () {
        const clickedBtn = this.nextElementSibling.classList.contains('active');
        
        for (let i = 0; i < accordion.length; i++) {
            if (clickedBtn) break;
            if (accordion[i].classList.contains('active')) {
                accordion[i].classList.remove('active');
                accordionBtn[i].classList.remove('active');
            }
        }
        this.nextElementSibling.classList.toggle('active');
        this.classList.toggle('active');
    });
}