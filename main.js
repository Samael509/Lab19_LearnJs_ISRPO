for (let i = 0; i < 5; i++) {
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log("Сумма:", sum);

let count = 0;
while (count < 3) {
  console.log("Count:", count);
  count++;
}

let number = 5;
while (number >= 0) {
  console.log(number);
  number--;
}

let doValue = 0;
do {
  console.log("Value:", doValue);
  doValue++;
} while (doValue < 3);

for (let i = 1; i <= 10; i++) {
  if (i === 5) continue;
  if (i === 8) break;
  console.log(i);
}

for (let i = 1; i <= 4; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

function sum(a, b) {
  return a + b;
}
console.log(sum(3, 5));

function multiply(a, b) {
  return a * b;
}
console.log(multiply(4, 5));

function sayHello(name) {
  console.log(`hello, ${name}`);
}
sayHello("hunk");

function printInfo(name, age) {
  console.log(`имя: ${name}, возраст: ${age}`);
}
printInfo("иван", 20);

function greet(name = "гость") {
  console.log("привет, " + name);
}
greet();
greet("лёха");

function calculateDiscount(price, discount = 10) {
  return price - (price * discount / 100);
}
console.log(calculateDiscount(1000));
console.log(calculateDiscount(1000, 20));

const add = function(a, b) {
  return a + b;
};
console.log(add(2, 3));

const sumFunc2 = (a, b) => a + b;
const double = x => x * 2;
const sayGreeting = () => console.log("hello");
const square = x => x * x;
const calculate = (a, b) => {
  let result = a + b;
  return result * 2;
};

console.log(sumFunc2(3, 4));
console.log(double(5));
sayGreeting();
console.log(square(4));
console.log(calculate(2, 3));