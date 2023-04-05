//고급 템플 리터럭(React) 문법

const x = 10;
const y = 20;
console.log(
  "x값은",
  x,
  "이고 y값은",
  y,
  "이고 두개를 곱한 값은",
  x * y,
  "입니다"
);

console.log(
  `x 값은 ${x} 이고 y 값은 ${y} 이고 두개를 곱한 값은 ${x * y}입니다`
);
// ${여기안에 연산을 넣지 않는것을 선호}
//

const result = x * y;

console.log(
  `x 값은 ${x} 이고 y 값은 ${y} 이고 두개를 곱한 값은 ${result}입니다`
);
