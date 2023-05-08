import React, { Fragment } from "react";
import "./FragmentTest.css";

function ListItem({ item }) {
  return (
    <>
      <dt>사과</dt>
      <dd>사과는 가을이 제철이죠</dd>
    </>
  );
}

function Glossary(props) {
  return (
    <>
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
    </>
  );
}

// let list = [
//   { no: 1, area: "대전", visited: false },
//   { no: 2, area: "부산", visited: true },
//   { no: 3, area: "목포", visited: false },
//   { no: 4, area: "제주도", visited: false },
// ];

// function MyComponent() {
//   return list.map((item) => {
//     return (
//       <>
//         <h1>{item.area}</h1>
//         <p>{item.visited ? "방문함" : "아직 안감"}</p>
//       </>
//     );
//   });
// }

const items = [
  { id: 1, name: "Apple", desc: "빨간건 사과" },
  { id: 2, name: "Banana", desc: "바나나는 길어" },
  { id: 3, name: "Cherry", desc: "체리는 비싸" },
];

function Practice() {
  const itemList = items.map((item) => {
    return (
      <>
        <dt>{item.name}</dt>
        <dd>{item.desc}</dd>
      </>
    );
  });

  return <dl>{itemList}</dl>;
}

//위에와 같은코드 구조분해 할당으로 작성
function PracticeDr() {
  return (
    <dl>
      {items.map(({ id, name, desc }) => {
        return (
          <React.Fragment key={id}>
            <dt>{name}</dt>
            <dd>{desc}</dd>
          </React.Fragment>
        );
      })}
    </dl>
  );
}

function App() {
  return (
    <div>
      <Practice />
      <PracticeDr />
    </div>
  );
}
export default App;
