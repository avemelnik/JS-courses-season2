function fibonacci(n) {
    var fibonacciNumber = [];
    fibonacciNumber[0] = 0;
    fibonacciNumber[1] = 1;
    fibonacciNumber[2] = 1;
    if (n === 1) {
        fibonacciNumber = [0];
    }
    else if (n === 2) {
        fibonacciNumber = [0, 1];
    }
    else if (n === 3) {
        fibonacciNumber = [0, 1, 1];
    }
    else
        for (var i = 3; i < n; i++) {
            fibonacciNumber[i] = fibonacciNumber[i - 2] + fibonacciNumber[i - 1];
        }
    return fibonacciNumber;
}

console.log('Fourth Task:' + '\nFibonacci Numbers: ' +fibonacci(10));