/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let sarr = s.trim().split(" ").pop().length
    return sarr
};