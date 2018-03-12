var test = ['word1', 'word2', 'word3', 'word4'];

var product = {
    name: 'Asus T100',
    price: 9754,
    image: 'img/bbf-dream-boy.png',
    discount_price: 8755,
    is_available: true,
    show: function () {
        alert('Name: ' + this.name+"\n "+'Price: ' + this.price);
    }
};

console.log(product['name']);
console.log(test[0]);
product.show();

var containerElem = document.getElementsByClassName("catalogue")[0];
// <div class="catalogue">

var productImage = document.createElement('img');
// <img >

productImage.setAttribute('src', product.image);
// <img src="img/asus_big.jpg">

productImage.setAttribute('class', 'test1');
// <img src="img/asus_big.jpg" class="test1">

containerElem.appendChild(productImage);

var products = [
    {name: 'Кавоварка', image: 'img/img1.png', isSuper: 0},
    {name: 'Ноутбук', image: 'img/img2.png', isSuper: 1},
    {name: 'Курс з веб-розробки', image: 'img/img3.png', isSuper: 0},
    {name: 'Кавоварка2', image: 'img/img1.png', isSuper: 0},
    {name: 'Кавоварка3', image: 'img/img2.png', isSuper: 0}
];

for (var i = 0; i < products.length; i++) {
    var product = products[i];

    var productImage = document.createElement('img');
    productImage.setAttribute('src', product.image);
    productImage.setAttribute('class', 'test'+i);

    if (product.isSuper == 1) {
        productImage.setAttribute('id', "superImage");
    }

    containerElem.appendChild(productImage);
}

// var testElem = document.createElement('div');
// testElem.innerHTML = "<h1>Test OK</h1>";
// containerElem.appendChild(testElem);

// for (var i = 0; i < products.length; i++) {
//     var product = products[i];
//
//     if (product.isSuper == 1) {
//         document.write('<img src="' + product.image + '" id="superImage"' + '/>');
//     }
//     else {
//         document.write('<img src="' + product.image + '" />');
//     }
// }
