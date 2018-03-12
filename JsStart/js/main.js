//window.
console.log("Hello JS!");

//console.log(document.getElementsByTagName("img").length);

var testVar = document.getElementById("superImage");

console.log(testVar.width);
testVar.style.width = "400px";
console.log(testVar.width);

// console.log(document.getElementsByTagName("img"));

/**************************** JS Syntax tests **************************/
var testVariable = 5;
var myFirstName = 'Sergiy';
var myLastName = 'Denysov';

var fullName = myFirstName + ' ' + myLastName;

console.log('Full name: ', fullName);

// if example
if(testVariable == 10) {
    console.warn('Test passed!');
}
else if (testVariable > 12) {
    console.warn('Test OK.');
}
else {
    console.warn('Test failed!');
}

// for example
for(var i = 0; i < testVariable; i=i+1) {
    console.log(i*i);
}

//function example
function square(x) {
    return x*x;
}

function addTen(x) {
    return x + 10;
}

var test = square(10);
console.log(test);

console.log(square(testVariable));

var currentFunc = square;

console.log('-------------------------');

for(var i = 0; i < testVariable; i=i+1) {
    console.log(currentFunc(i));
}

console.log('-------------------------');

currentFunc = addTen;

for(var i = 0; i < testVariable; i=i+1) {
    console.log(currentFunc(i));
}

console.log('-------------------------');

/* Second order function - function returns function */
function generateSummation(x) {
    var res = function (y) {
        return y * x;
    }

    return res;
}

var f1 = generateSummation(2);
var f2 = generateSummation(3);
var f3 = generateSummation(10);

for(var i = 1; i <= 5; i++) {
    console.log(f1(i), f2(i), f3(i));
}


/* arrays */

// ініціалізація масива вручну
var oddNumbers = [1, 3, 5, 7];

function sumArray(data) {
    var s = 0;
    for(var i=0;i<data.length;i++) {
        s = s + data[i];
    }
    return s;
}

console.log("Fixed size odd numbers sum: ", sumArray(oddNumbers));

function createOddNumbersArray(count) {
    var res = [];
    var base = 1;
    for(var i=0;i<count;i++) {
        res.push(base);
        base += 2;
    }
    return res;
}

console.log(createOddNumbersArray(10));

function addWords(data) {
    var s = '';
    for(var i=0;i<data.length;i++) {
        s = s + ' ' + data[i];
    }
    return s;
}

console.log("Odd numbers sum: ", sumArray(createOddNumbersArray(99)));

var wordsArray = ['the', 'super', 'interesting', 'array', 'of', 'words'];

// wordsArray[1]

console.log('Words array: ', wordsArray);

console.log('Added sentence: ',  addWords(wordsArray));

/* Об'єкти */

var simplestObject = {
    x: 10,
    y: 7,
    add : function() {
        return this.x + this.y;
    }
};

// звертаємось як до масива (асоціативного)
console.log('Our point: ', simplestObject['x'], simplestObject['y']);
// звертаємось як до об'єкта
console.log('Our point: ', simplestObject.x, simplestObject.y);

// виклик методу об'єкту
console.log('Point coordinates sum: ', simplestObject.add());

/**************************** JS Syntax tests end **************************/