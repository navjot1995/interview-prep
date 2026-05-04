import { Question, Category } from '../types';

export const javascriptQuestions: Question[] = [
  {
    id: 1,
    question: "What is closure in JavaScript?",
    answer: "A closure is a function that has access to its own scope, the outer function's scope, and the global scope. It allows a function to access variables from its outer scope even after the outer function has returned.",
    category: "Functions",
    difficulty: "Medium",
    codeExample: `function outerFunction(x) {
  return function innerFunction(y) {
    return x + y;
  };
}
const closure = outerFunction(5);
console.log(closure(3)); // 8`
  },
  {
    id: 2,
    question: "Explain the difference between let, const, and var",
    answer: "var is function-scoped and can be redeclared, let is block-scoped and cannot be redeclared in same scope, const is block-scoped and cannot be reassigned after declaration.",
    category: "Variables",
    difficulty: "Easy",
    codeExample: `var a = 1; // function-scoped
let b = 2; // block-scoped, can update
const c = 3; // block-scoped, cannot update`
  },
  {
    id: 3,
    question: "What is event delegation?",
    answer: "Event delegation is a technique where you attach a single event listener to a parent element instead of multiple listeners to child elements. It takes advantage of event bubbling to handle events on dynamically added elements.",
    category: "DOM",
    difficulty: "Medium",
    codeExample: `document.getElementById('parent').addEventListener('click', (e) => {
  if (e.target && e.target.matches('button.child')) {
    console.log('Child button clicked!');
  }
});`
  },
  {
    id: 4,
    question: "What is the difference between == and ===?",
    answer: "== compares values after type coercion, while === compares both value and type without coercion (strict equality).",
    category: "Operators",
    difficulty: "Easy",
    codeExample: `console.log(5 == '5'); // true
console.log(5 === '5'); // false
console.log(null == undefined); // true
console.log(null === undefined); // false`
  },
  {
    id: 5,
    question: "Explain 'this' keyword in JavaScript",
    answer: "The 'this' keyword refers to the object that is executing the current function. Its value depends on how the function is called: in methods it refers to the object, in regular functions it refers to the global object (window in browsers), and in arrow functions it inherits from the outer scope.",
    category: "Objects",
    difficulty: "Medium",
    codeExample: `const obj = {
  name: 'John',
  regularFunc: function() { console.log(this.name); },
  arrowFunc: () => { console.log(this.name); }
};
obj.regularFunc(); // John
obj.arrowFunc(); // undefined`
  },
  {
    id: 6,
    question: "What is a Promise?",
    answer: "A Promise is an object representing the eventual completion or failure of an asynchronous operation. It has three states: pending, fulfilled, and rejected.",
    category: "Async",
    difficulty: "Medium",
    codeExample: `const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success!');
  }, 1000);
});
myPromise.then(result => console.log(result));`
  },
  {
    id: 7,
    question: "What is the spread operator?",
    answer: "The spread operator (...) allows an iterable to be expanded in places where zero or more arguments or elements are expected. It's used for copying arrays, combining objects, and function arguments.",
    category: "ES6",
    difficulty: "Easy",
    codeExample: `const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }`
  },
  {
    id: 8,
    question: "Explain hoisting in JavaScript",
    answer: "Hoisting is JavaScript's behavior of moving declarations to the top of their scope before code execution. Variables declared with var are hoisted but initialized as undefined, while let and const are hoisted but not initialized. Function declarations are fully hoisted.",
    category: "Core Concepts",
    difficulty: "Medium",
    codeExample: `console.log(x); // undefined
var x = 5;
// Same as:
var x;
console.log(x);
x = 5;`
  },
  {
    id: 9,
    question: "What is the difference between map() and forEach()?",
    answer: "map() returns a new array with transformed elements, while forEach() just iterates over the array and doesn't return anything. map() is chainable because it returns an array.",
    category: "Arrays",
    difficulty: "Medium",
    codeExample: `const numbers = [1, 2, 3];
const mapped = numbers.map(x => x * 2); // [2, 4, 6]
const foreachResult = numbers.forEach(x => x * 2); // undefined`
  },
  {
    id: 10,
    question: "What is debouncing?",
    answer: "Debouncing is a technique that delays the execution of a function until after a certain amount of time has passed since the last time it was called. It's useful for optimizing performance in events like search inputs, scroll, and resize.",
    category: "Performance",
    difficulty: "Hard",
    codeExample: `function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}`
  }
];

export const categories: Category[] = [
  { id: 'all', name: 'All Questions', icon: '📚', count: javascriptQuestions.length },
  { id: 'variables', name: 'Variables', icon: '📝', count: javascriptQuestions.filter(q => q.category === 'Variables').length },
  { id: 'functions', name: 'Functions', icon: '⚙️', count: javascriptQuestions.filter(q => q.category === 'Functions').length },
  { id: 'objects', name: 'Objects', icon: '🎯', count: javascriptQuestions.filter(q => q.category === 'Objects').length },
  { id: 'async', name: 'Async', icon: '⏰', count: javascriptQuestions.filter(q => q.category === 'Async').length },
  { id: 'dom', name: 'DOM', icon: '🌳', count: javascriptQuestions.filter(q => q.category === 'DOM').length },
  { id: 'es6', name: 'ES6+', icon: '✨', count: javascriptQuestions.filter(q => q.category === 'ES6').length },
  { id: 'arrays', name: 'Arrays', icon: '📊', count: javascriptQuestions.filter(q => q.category === 'Arrays').length },
  { id: 'core-concepts', name: 'Core Concepts', icon: '🧠', count: javascriptQuestions.filter(q => q.category === 'Core Concepts').length },
  { id: 'performance', name: 'Performance', icon: '⚡', count: javascriptQuestions.filter(q => q.category === 'Performance').length },
];