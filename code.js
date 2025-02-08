function divideAndConquerSum(a) {
    //return 0 for empty array 
    if (a.length = 0) {
        return 0;
    } else { 
        return divideConquer(a, 0, a.length - 1);
    } 
}

function divideConquer(x, low, high) {
    //single element 
    if (low === high) {
        return x[low];
    }
    //two elements 
    if (high - low === 1) {
        return x[low] + x[high]
    } 

    //find split lengths
    var third = low + Math.floor((high - low + 1) / 3);
    var twoThirds = low + Math.floor((2 * (high - low + 1)) / 3);

    //recursively split array into thirds
    var left = divideConquer(x, low, third - 1); 
    var middle = divideConquer(x, third, twoThirds - 1);
    var right = divideConquer(x, twoThirds, high);

    //return sum of all elements
    return left + middle + right;
}
