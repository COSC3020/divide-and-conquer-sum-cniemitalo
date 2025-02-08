function divideAndConquerSum(a) {
    return divideConquer(a, 0, a.length);
}

function divideConquer(x, low, high) {
    //base cases
    //empty
    if (high - low < 1) {
        return 0; 
    }
    //single element 
    if (high - low === 1) {
        return x[low];
    } 

    //find split lengths
    var third = low + Math.floor((high - low) / 3);
    var twoThirds = low + 2* Math.floor(((high - low)) / 3) + 1;

    //recursively split array into thirds
    var left = divideConquer(x, low, third); 
    var middle = divideConquer(x, third, twoThirds);
    var right = divideConquer(x, twoThirds, high);

    //return sum of all elements
    return left + middle + right;
}
