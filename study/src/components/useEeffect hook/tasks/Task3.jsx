import React, {  useEffect, useState } from "react";

const Task3 = () => {
  let title = document.querySelector("title");

  let [state, setState] = useState(false);
  let [messge, setMessge] = useState("")
  let [clicked, setClicked] = useState(false)


  useEffect(() => {
    if(clicked){
        setMessge("Toggle Update")
    }
  }, [state]);

  return (
    <div>
      <button
        onClick={() => {
          setState(!state);
          setClicked(true)
        }}
      >
        {state ? "ON" : "OFF"}
      </button>
      <p>{messge}</p>
    </div>
  );
};

export default Task3;
