var exchangeRates = null;

function calculate() {

    var currencySelect = $("#currencyCode");

    var selectedOption = currencySelect.find(":selected").text();

    var currencyCode = selectedOption;//'USD';
    var currencyInfo = null;

    for(var i=0;i<exchangeRates.length;i++) {
        if(exchangeRates[i].cc === currencyCode) {
            currencyInfo = exchangeRates[i];
            break;
        }
    }

    var inputSum = $("#amount").val();

    $("#convertedAmount").val(inputSum / currencyInfo.rate);
}

function generateBlogBlocks(blogPosts) {
    for (var i = 0; i < blogPosts.length; i++) {
        var textBlock = $("<div />");
        textBlock.addClass('blog-post-text');
        textBlock.text(blogPosts[i].body);

        var tile = $('<li class="tile"></li>');
        tile.append('<h1>'+blogPosts[i].title+'</h1>');
        tile.append(textBlock);

        $('.products-list').append(tile);
    }
}

function generateCourses(courses) {
    var currencySelect = $("#currencyCode");

    for (var i = 0; i < courses.length; i++) {
        var textBlock = $("<div />");
        textBlock.text(courses[i].rate);

        var tile = $('<li class="tile"></li>');
        tile.append('<h1>'+courses[i].txt + '(' + courses[i].cc + ')' +'</h1>');
        tile.append(textBlock);

        $('.products-list').append(tile);

        currencySelect.append($("<option value='"+courses[i].cc+"'>"+courses[i].cc+"</option>"));
    }
}

$(document).ready(
    function() {
        console.log('Document loaded!');
/*
        $.get(
            //"https://www.mocky.io/v2/5aa9556e3200002a2d165c54",
            "https://jsonplaceholder.typicode.com/posts",
            function( blogPosts ) {
                console.log("Server returned:", blogPosts)
                // Не потрібно, якщо сервер повертає тип application/json
                // JSON.parse(blogPosts)
                generateBlogBlocks(blogPosts);
            });
*/
        $.get(
            "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json",
            function( courses ) {
                console.log("Server returned:", courses)
                exchangeRates = courses;
                generateCourses(courses);
            });
  }
);