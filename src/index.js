module.exports = function reverse (n) {
    let arrN = Array.from(String(n), Number);
    let rev = arrN.reverse();
    return parseInt(rev.join(''), 10)
  
}
