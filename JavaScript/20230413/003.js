////
function sayName() {
  console.log(this);
}

var c = {
  hello: "world",
  say: sayName,
};

var b = {};
