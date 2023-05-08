import "./TripList.css";

let list = [
  { no: 1, area: "대전", visited: false },
  { no: 2, area: "부산", visited: true },
  { no: 3, area: "목포", visited: false },
  { no: 4, area: "제주도", visited: false },
];

function TripList() {
  return (
    <div className="tripListStyle">
      <ul></ul>
    </div>
  );
}

export default TripList;
