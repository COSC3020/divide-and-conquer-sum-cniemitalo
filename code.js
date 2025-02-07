function divideAndConquerSum(a) {
    if (a.length === 0) {
        return 0; 
    } else {
        return divideConquer(a, 0, a.length - 1);
    }
}

function divideConquer(x, low, high) {
    if (low >= high) {
        return x[low];
    }
    var third = low + Math.floor((high - low) / 3);
    var twoThirds = low + 2 * Math.floor(((high - low)) / 3);

    var left = divideConquer(x, low, third); 
    var middle = divideConquer(x, third + 1, twoThirds);
    var right = divideConquer(x, twoThirds + 1, high);
    return left + middle + right;
}
