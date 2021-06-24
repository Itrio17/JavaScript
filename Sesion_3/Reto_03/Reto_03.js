function fibonacci(num) {
    if (num <=1) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

function fibonacciSequence(limit) {
    if(limit < 1) return console.log('Limit must be greater than 0');

    for(var i = 0; i < limit; i++) {
        console.log(fibonacci(i));
    }
}

console.log(fibonacciSequence(20));