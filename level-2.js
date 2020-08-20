// question 1

for (var i = 15; i < 26; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// question 2

function logger() {
    console.log("I am a function");
}

var innerFunction = logger();

function outerFunction(inputFunction) {
    inputFunction();
}

outerFunction(innerFunction);