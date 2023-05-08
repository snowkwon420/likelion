//이 임포트문은 바닐라 js 에서는 불가능하지만 webpack 이라서 가능함
import "./App.css";
import Menu from "./components/menu/Menu";
import TextArea from "./components/TextArea";
import TripList from "./components/triplist/TripList";

function App() {
  return (
    <div>
      <h1>메뉴</h1>
      <Menu />
      <TextArea />
      <TripList />
    </div>
  );
}

export default App;
