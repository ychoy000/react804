const arr = [1, 2, 3];
const copy = [...arr];
console.log(copy); // [1, 2, 3]

const a = [1, 2];
const b = [3, 4];
// a, b의 배열값을 가져와서 새로운 배열을 만든다.
const merged = [...a, ...b];
// 다음은 단순 병합 [[1, 2], [3, 4]]
// const merged = [a, b];
console.log(merged); // [1, 2, 3, 4]

// 함수 인자(arguments) 전달
function sum(x, y, z) {
  return x + y + z;
}
const nums = [1, 2, 3];
console.log(sum(...nums)); // 6

// 객체 복사
const obj = { a: 1, b: 2 };
const copyObj = { ...obj };
console.log(copy); // { a: 1, b: 2 }

// 객체 병합
const o1 = { a: 1, b: 2 };
const o2 = { b: 3, c: 4 };
const mergedObj = { ...o1, ...o2 };
// Key(속성)가 같은 경우 뒤의 값으로 지정된다.
console.log(merged); // { a: 1, b: 3, c: 4 }

// 문자열 분해
const str = "hello";
const chars = [...str];
console.log(chars); // ['h', 'e', 'l', 'l', 'o']

// rest parameter
function greet(...names) { // ← rest parameter
  console.log(names);      // ["Alice", "Bob"]
}
greet("Alice", "Bob");