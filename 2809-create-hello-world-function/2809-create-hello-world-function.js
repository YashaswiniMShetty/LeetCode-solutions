/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function(a=0) {
      return "Hello World"; 
    }
};

 const f = createHelloWorld();
 f(); // "Hello World"