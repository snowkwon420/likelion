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

const nums = [3, 1, 11, 8, 6];
console.log(
  nums.sort((a, b) => {
    console.log(a, b);
  })
);
