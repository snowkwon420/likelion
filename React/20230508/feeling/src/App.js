import Result from "./components/Result";
import Selection from "./components/Selection";
import SelectList from "./components/SelectList";
function App() {
  return (
    <div>
      <h1 style={{}}>오늘의 기분을 선택해 주세요 😄</h1>
      {/* <Selection feel="좋아요 ! 😃" />
      <Selection feel="정말 좋아요 ! 🤭" />
      <Selection feel="최고에요 ! 😙" />
      <Selection feel="미쳤어요 !! 🤪" /> */}
      <SelectList />
      <Result />
    </div>
  );
}
export default App;
