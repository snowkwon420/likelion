//sort

let avengers = ["아이언맨", "스파이더맨", "헐크", "토르"];
console.log(avengers.sort());

//사전식 정렬입니다. 시간이 지나도 못바뀌는 내용입니다.
const num1 = [3, 1, 8, 6];
console.log(num1.sort());

const num2 = [3, 1, 11, 8, 5];
console.log(num2.sort());
//sort 를 어떤 알고리즘으로 할꺼냐는 브라우저 자유

const num3 = [3, 1, 11, 8, 5];
console.log(num2.sort((a, b) => a - b));

//실무사용 코드
function sort(key) {
  if (click) {
    click = false;
    var sortedData = jsonData.sort((a, b) =>
      a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0
    );
  } else {
    click = true;
    var sortedData = jsonData.sort((a, b) =>
      a[key] > b[key] ? -1 : a[key] < b[key] ? 1 : 0
    );
  }
}

// 딥하게 sort를 탐색해보겠다!?
const nums = [3, 1, 11, 8, 6];
console.log(
  nums.sort((a, b) => {
    console.log(a, b);
  })
);

const nums = [3, 1, 11, 8, 6];
console.log(
  nums.sort((a, b) => {
    console.log(a, b);
    console.log(a - b);
  })
);

// 보충자료
// 9 - 13 ==> 음수  ==> [9, 13, 10, 2]
// 10 - 9 ==> 양수 ==> [9, 13, 10, 2]
// 10 - 13 ==> 음수 ==> [9, 10, 13, 2]
// 10 - 9 ==> 양수 ==> [9, 10, 13, 2]
// 2 - 10 ==> 음수 ==> [9, 2, 10, 13]
// 2 - 9 ==> 음수 ==> [2, 9, 10, 13]

// if (true) {
//     let num = 10;
// }
const arrNum2 = [13, 9, 10, 2];
arrNum2.sort(function (a, b) {
  // return a - b;
  if (a < b) {
    return -1;
  } else if (b < a) {
    return 1;
  } else {
    return 0;
  }
});

const studentList3 = [
  { id: 1, product: "연필", stock: 10 },
  { id: 2, product: "노트", stock: 100 },
  { id: 3, product: "지우게", stock: 5 },
  { id: 4, product: "볼팬", stock: 30 },
];
studentList3.sort((a, b) => {
  // if (a.stock < b.stock) {
  //     return -1
  // } else if (b.stock < a.stock) {
  //     return 1
  // } else {
  //     return 0
  // }

  return a.stock - b.stock;
});
