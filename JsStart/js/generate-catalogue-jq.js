var products = [
    {name: 'Кавоварка', image: 'img/img1.png', isSuper: 0},
    {name: 'Ноутбук', image: 'img/img2.png', isSuper: 1},
    {name: 'Курс з веб-розробки', image: 'img/img3.png', isSuper: 0},
    {name: 'Кавоварка2', image: 'img/img1.png', isSuper: 0},
    {name: 'Кавоварка3', image: 'img/img2.png', isSuper: 0}
];

$(document).ready(
    function() {
        console.log('Document loaded!');

        // jquery зі звичайним циклом
        for (var i = 0; i < products.length; i++) {
            var img = $("<img />");
            // jQuery-обгортка навколо <img />

            img.attr('src', products[i].image);
            img.attr('alt', products[i].name);

            if(products[i].isSuper)
                img.addClass('super');

            var tile = $('<div></div>');
            tile.append('<h1>'+products[i].name+'</h1>');
            tile.append(img);

            $('.catalogue').append(tile);
        }

        // варіант з перебором через jQuery
        $.each(products, function( index, value ) {
            var img = $("<img />");

            img.attr('src', value.image);
            img.attr('alt', value.name);

            if(value.isSuper)
                img.addClass('super');

            $('.catalogue').append(img);
        });
    }
);