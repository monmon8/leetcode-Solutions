/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

    if (x < 0) return -1 * reverse(-x);
    const solution = (x+("")).split("").reverse().join("")
    return solution > 2**31 ? 0 : solution
                      
  }