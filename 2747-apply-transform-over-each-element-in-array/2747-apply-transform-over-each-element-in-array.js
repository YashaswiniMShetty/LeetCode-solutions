/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const returnedArray = []; // Initialize an empty array to store the transformed elements.
    for (let i = 0; i < arr.length; i++) { // Iterate through the input array.
        returnedArray[i] = fn(arr[i], i); // Apply the mapping function and store the result in the new array.
    }
    return returnedArray;
};