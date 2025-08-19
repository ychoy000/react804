// 나머지 인자 받기 ...numbers 는 무조건 마지막에 위치해야 함
function sum(a, b, ...numbers) {
    console.log('...numbers', ...numbers);
  return a+b+numbers.reduce((acc, cur) => acc + cur, 0);
}

console.log(sum(1, 2, 3));      // 6
console.log(sum(5, 10, 15, 20)); // 50
console.log(sum(5, 10, 15, 20, 30)); // 80