function divideAndConquerSum(a) {
    return divideConquer(a, 0, a.length - 1);
}

function divideConquer(x, low, high) {
    if (high - low <= 0) {
        return 0; 
    }
    if (high - low === 1) {
        return x[low];
    }
    var third = low + Math.floor((high - low) / 3);
    var twoThirds = low + 2 * Math.floor(((high - low)) / 3) + 1;

    var left = divideConquer(x, low, third + 1); 
    var middle = divideConquer(x, third + 1, twoThirds);
    var right = divideConquer(x, twoThirds, high);
    return left + middle + right;
}
