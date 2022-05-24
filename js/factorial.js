exports.factorial = function(num) {
    let sum = 1;
    for (let i = num; i > 1; i--) {
        sum *= i
    }
    return sum;
};
