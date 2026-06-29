/*Without Destructuring
const numbers = [10, 20, 30];

const a = numbers[0];
const b = numbers[1];
const c = numbers[2];
console.log(a, b, c);


With Destructuring
const numbers = [10, 20, 30];

const [a, b, c] = numbers;

console.log(a, b, c);

Both produce: */



const arr=['apple','mango','papaya','orange'];
const [first,second,third,fourth]=arr
console.log(first,second)