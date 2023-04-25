function getMemoTitle() {
  const memoTitle = document.querySelector("#memotitle").value;
  return memoTitle;
}
function getMemoContent() {
  const memoContent = document.querySelector("#memo").value;
  return memoContent;
}

function resetInput() {
  document.querySelector("#memotitle").value = "";
  document.querySelector("#memo").value = "";
}

function createMemo() {
  const title = getMemoTitle();
  const content = getMemoContent();

  const memoObj = {
    title: title,
    content: content,
  };

  return memoObj;
}

const memolists = [];

function saveMemo(memo) {
  memolists.push(memo);
}

function createMemoLi(memo) {
  const $memoLi = document.createElement("li");
  const $title = document.createElement("strong");
  const $content = document.createElement("p");

  $title.innerHTML = memo.title;
  $content.innerHTML = memo.content;
  $memoLi.append($title, $content);
  return $memoLi;
}

function showMemo() {
  // const $memoLists =  []
  // for (let index = 0; index < memolists.length; index++) {
  //     // const memoObj = {
  //     //     title: title,
  //     //     content: content
  //     // }
  //     // 이렇게 생긴 메모 하나 가져오기
  //     const memo = memolists[index];

  //     const $memoLi = document.createElement("li");
  //     const $title = document.createElement("strong");
  //     const $content = document.createElement("p");

  //     $title.innerHTML = memo.title;
  //     $content.innerHTML = memo.content;
  //     $memoLi.append($title,$content);

  //     $memoLists.push($memoLi);
  // }
  const $memoLists = memolists.map(createMemoLi);
  console.log($memoLists);
}

function buttonOnclickHandler() {
  const memo = createMemo();
  saveMemo(memo);
  showMemo();
  resetInput();
}

const $memoButton = document.querySelector("#memosubmit");
$memoButton.onclick = buttonOnclickHandler;
