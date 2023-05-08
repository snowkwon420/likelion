import Selection from "./Selection";
import React, { useState } from "react";

function SelectList() {
  const [like, setLike] = useState();

  function clickFeel() {
    setLike = this.text();
    console.log(setLike);
  }

  return (
    <div>
      <Selection feel="좋아요" onCLick={clickFeel} />
    </div>
  );
}

export default SelectList;
