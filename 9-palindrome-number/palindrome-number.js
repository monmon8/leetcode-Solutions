/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let b = x.toString().split('').reverse().join('')
   
    let  a = x.toString()
  if(a === b){
      return true 
  }else{
      return false
  }
};