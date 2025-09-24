/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let createCount = n-1;
    return function() {
        createCount +=1;
        return createCount;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */