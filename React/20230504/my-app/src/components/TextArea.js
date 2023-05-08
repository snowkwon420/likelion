function TextArea() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const hour = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();
  const divStyle = { backgroundColor: "black", color: "red" };

  return (
    <div className="wrapper">
      <h1 style={divStyle}>년: {year}</h1>
      <h1 style={divStyle}>
        월/일:{month}/{day}
      </h1>
      <h1>
        시간 : {hour}시 {min}분 {sec}초
      </h1>
    </div>
  );
}

export default TextArea;
