import axios from "axios";
import React, { useEffect, useState } from "react";

const FormsTask5 = () => {
  let [data, setData] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:8080/quotes").then((res) => {
    console.log(res.data);
    setData(res.data);
  }).catch((err)=>{
    console.log(err);
    
  })
  }, [])

  return (
    <div>
      {data.map((ele, indx) => (
        <div key={indx}>
          <h1> {ele.quote}</h1>{" "}
        </div>
      ))}
    </div>
  );
};

export default FormsTask5;
