import "./style.css";

function Selection(props) {
  return (
    <div>
      <button className="select">기분이: {props.feel}</button>
    </div>
  );
}

export default Selection;
