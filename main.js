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

let numbersArr = [1, 2, 3, 4, 5];
console.log(numbersArr);

console.log(numbersArr[0]);
console.log(numbersArr[1]);

console.log(numbersArr.length);

let colors = ["red", "green", "blue"];
console.log(colors[0]);
console.log(colors[colors.length - 1]);
colors[1] = "yellow";
console.log(colors);

numbersArr.push(10);
console.log(numbersArr);
numbersArr.pop();
console.log(numbersArr);

let students = [];
students.push("Иван");
students.push("Мария");
students.push("Алексей");
students.pop();
console.log(students);

let numbers2 = [10, 20, 30];
for (let i = 0; i < numbers2.length; i++) {
  console.log(numbers2[i]);
}

for (let value of numbers2) {
  console.log(value);
}

let mixedArray = [1, "text", true, 3.14];
console.log(mixedArray);

let cities = ["Москва", "Варшава", "Берлин", "Париж"];
let searchCity = "Берлин";
console.log(cities.includes(searchCity));
if (cities.includes(searchCity)) {
  console.log(cities.indexOf(searchCity));
}