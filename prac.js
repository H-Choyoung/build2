
let a = 1;
let b = 2;

let c = [3,4,5];

function sum(first, second){
  return first + second;
}

console.log(sum(a, b));
let test = sum(a, b);

let testTwo = c.map(Math.sqrt);

let testThree = c.map(function(num){
  return num * b + a;
});

let d = [6,7,8]
let testFour = c.push(d);
