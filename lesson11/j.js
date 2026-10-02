function fun(a, b) {
    let result = [];

    for (let i in a) {
        let sum = a[i] + b[i];
        result.push(sum);
    }

    return result;
}

console.log(fun([1, 1, 1], [1, 1, 1]));