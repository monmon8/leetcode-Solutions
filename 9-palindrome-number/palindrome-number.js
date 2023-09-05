/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function(x) {
    let reserved = x.toString().split('').reverse().join('')
    if (x.toString() === reserved){
        return true
    }else{
        return false
    }
};