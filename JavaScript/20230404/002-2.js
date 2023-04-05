//Array_2

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.filter(function (el) {
  return el % 2 === 0;
});

function solution(n) {
  return Array(n)
    .fill()
    .map((_, i) => i + 1)
    .filter((v) => v % 2 === 0)
    .reduce((a, c) => a + c, 0);
}

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr2.filter(function (el) {
  return el % 2 !== 0;
});

// 모음 제거
Array.from("hello world").filter((v) => !["a", "e", "i", "o", "u"].includes(v));

//reduce
const arr1 = [1, 2, 3, 4, 5];
arr1.reduce((a, c) => a + c, 0);

const arr2 = [];
arr1.reduce((a, c) => a + c);

const arr1 = [1];
arr1.reduce((a, c) => a + c);

const arr1 = [];
arr1.reduce((a, c) => a + c, 0);

//include 

//join



