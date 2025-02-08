function divideAndConquerSum(a) {
    if (a.length = 0) {
        return 0;
    } else { 
        return divideConquer(a, 0, a.length - 1);
    } 
}

function divideConquer(x, low, high) {
    if (low === high) {
        return x[low];
    }
    var third = low + Math.floor((high - low + 1) / 3);
    var twoThirds = low + Math.floor((2 * (high - low + 1)) / 3);

    var left = divideConquer(x, low, third - 1); 
    var middle = divideConquer(x, third, twoThirds - 1);
    var right = divideConquer(x, twoThirds, high);
    
    return left + middle + right;
}
