function divideAndConquerSum(a) {
    return divideConquer(a, 0, a.length - 1);
}

function divideConquer(x, low, high) {
    if (low >= high) return x[low];
    var third = low + Math.floor((high - low) / 3);
    var twoThirds = low + Math.floor((2 * (high - low)) / 3);
    var left = divideConquer(x, low, third);
    var middle = 0; 
    if (third != twoThirds) {
        middle = divideConquer(x, third + 1, twoThirds);
    }
    var right = divideConquer(x, twoThirds + 1, high);
    return left + middle + right;
}
