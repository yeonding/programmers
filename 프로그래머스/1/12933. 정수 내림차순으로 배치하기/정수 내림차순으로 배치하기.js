function solution(n) {
   const numbers = n.toString().split('').sort((a , b) => b - a).join('');
   return parseInt(numbers);
}