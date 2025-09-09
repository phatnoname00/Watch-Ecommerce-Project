// Tạo danh sách sản phẩm
function createProduct() {
    if (localStorage.getItem('products') == null) {
        let products = [
            {
                id: 1,
                name: 'Orient - Nam RA-AK0007S10B Size 42.5mm',
                price_old: '13.200.000',
                price_current: '11.380.000',
                img: '../assets/images/product/RA-AK0007S10B.jpg',
                status: 10,
                sold: '259'
            },
            {
                id: 2,
                name: 'Casio - Nam MTP-1374L-1AVDF Size 43.5mm',
                price_old: '2.500.000',
                price_current: '1.700.000',
                img: '../assets/images/product/MTP-1374L-1AVDF.jpg',
                status: 10,
                sold: '200'
            },
            {
                id: 3,
                name: 'Tissot - Nam T086.407.16 Size 41mm',
                price_old: '9.500.000',
                price_current: '8.900.000',
                img: '../assets/images/product/T086.407.16.031.00.jpg',
                status: 10,
                sold: '240'
            },
            {
                id: 4,
                name: 'Orient - Nam RE-AV0005L00B Size 41mm',
                price_old: '22.000.000',
                price_current: '21.000.000',
                img: '../assets/images/product/RE-AV0005L00B.jpg',
                status: 10,
                sold: '124'
            },
            {
                id: 5,
                name: 'Olym Pianus - Nam OP990-45ADGS-GL-D Size 42mm',
                price_old: '7.500.000',
                price_current: '7.000.000',
                img: '../assets/images/product/OP990-45ADGS-GL-D.jpg',
                status: 10,
                sold: '310'
            },
            {
                id: 6,
                name: 'Seiko - Nam SNK809K2 Size 37mm',
                price_old: '4.000.000',
                price_current: '3.850.000',
                img: '../assets/images/product/SNK809K2.jpg',
                status: 10,
                sold: '292'
            },
            {
                id: 7,
                name: 'Tissot - Nữ T050.207.37 Size 35mm',
                price_old: '12.300.000',
                price_current: '11.800.000',
                img: '../assets/images/product/T050.207.37.017.04.jpg',
                status: 10,
                sold: '159'
            },
            {
                id: 8,
                name: 'Omega - Nam 231.10.39.21 Size 38.5mm',
                price_old: '72.000.000',
                price_current: '69.500.000',
                img: '../assets/images/product/N231.10.39.21.jpg',
                status: 10,
                sold: '194'
            },
            {
                id: 9,
                name: 'Rolex - Nam M126201-0018 Size 36mm',
                price_old: '337.500.000',
                price_current: '332.500.000',
                img: '../assets/images/product/M126201-0018.jpg',
                status: 10,
                sold: '298'
            },
            {
                id: 10,
                name: 'Hublot 465.OE.2080.RW.1204',
                price_old: '550.200.000',
                price_current: '534.600.000',
                img: '../assets/images/product/465.OE.2080.RW.1204.jpg',
                status: 10,
                sold: '230'
            }
        ]
        localStorage.setItem('products', JSON.stringify(products));
    }
}
window.onload = createProduct();
