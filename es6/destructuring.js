// 구조분해할당 (Destructuring Assignment)
/**
 * 객체 또는 배열의 값을 개별 변수로 쉽게 꺼내는 문법
 */

/* 주석 만드는 또 다른 방법: 아래 */
/**
 * DOC(Documentation) 시 사용
 * 
 * 참괴 Code Runner 실행 -> ctrl+alt+n
 */

const arr = [1, 2, 3];
const [a, b, c] = arr;


console.log(a);
console.log(b);
console.log(c);

// const [x,y, z=100] = [10, 20]; // 기본값 설정
const [x,y, z=100] = [10, 20, 30]; // 기본값 설정
// 값을 주면 기본값은 무시된다.
console.log('x=', x);
console.log('y=', y);
console.log('z=', z);

// 객체 구조 분해
const user = { name: '홍길동', age: 25 };
const { name, age } = user;

console.log(name); // 홍길동
console.log(age);  // 25

// 별칭 사용(다른 변수 이름으로 할당)
// {속성: 별칭}
const { _name: userName, age: userAge } = user;
console.log("userName = ", userName); // 홍길동
console.log("userAge = ", age); // 

// 기본값 설정
const {job = '개발자'} = user;
console.log(job);

// 함수의 매개변수에서 구조 분해(React 에서 매우 자주 사용)
function printUser({name2, age2}){
    console.log(`${name2} 님의 나이는 ${age2}`);
}
const user2 = {name2: 'Jane', age2: 24};
printUser(user2);

// 중첩 구조 분해
// {{}}
const user3 = {
  name: '철수',
  address: {
    city: '서울',
    zip: '12345'
  }
};

const {
  address: { city }, address: {zip}, name} = user3;

console.log(city, '('+zip+')'); // 서울

// 리액트
// const [변수, 함수] = useState(초깃값);
// 변수는 상태 값
// 함수는 상태 변경 함수, 함수 이름은 set 변수명, 카멜 표기법으로 쓴다.
// const [count, setCount] = useState(0);

const handleChange = (event) => {
    const {name3, value3} = event.target;
    console.log(`${name3}: ${value3}`);
};

handleChange();