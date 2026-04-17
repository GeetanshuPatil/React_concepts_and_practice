import React, { useState } from "react";

const StateTask5 = () => {
    let [property, setProperty] = useState({
        bg: "white",
        text: "black" ,
        font: 16 ,
    })
    let handleClick =(e)=>{
        setProperty({...property, [e.target.name]: e.target.value})

        // property.font > "22" && setProperty({...property,  })
    }

  return (
    <div className="flex h-screen  flex-col justify-center items-center">
      <div>
        <button className=" text-white bg-blue-400 rounded p-2 m-1" name="bg" value={"red"}  onClick={handleClick}>BG-red</button>
        <button className=" text-white bg-blue-400 rounded p-2 m-1" name="bg" value={"green"} onClick={handleClick}>BG-Green</button>
        <button className=" text-white bg-blue-400 rounded p-2 m-1" name="bg" value={"blue"} onClick={handleClick}>BG-blue</button>
        <button className=" text-white bg-blue-400 rounded p-2 m-1" name="bg" value={"white"} onClick={handleClick}>BG-white</button>
      </div>
      <div>
        <button className=" text-white bg-blue-400 rounded p-2 m-1" name="text" value={"black"} onClick={handleClick}>Text-black</button>
        <button className=" text-white bg-blue-400 rounded p-2 m-1" name="text" value={"red"} onClick={handleClick}>Text-red</button>
        <button className=" text-white bg-blue-400 rounded p-2 m-1" name="text" value={"blue"} onClick={handleClick}>Text-blue</button>
        <button className=" text-white bg-blue-400 rounded p-2 m-1" name="text" value={"white"} onClick={handleClick}>Text-white</button>
      </div>
      <div>
        <button className=" text-white bg-blue-400 rounded p-2 m-1" name="font" value={"16"} onClick={handleClick} >16px</button>
        <button className=" text-white bg-blue-400 rounded p-2 m-1" name="font" value={"18"} onClick={handleClick} >18px</button>
        <button className=" text-white bg-blue-400 rounded p-2 m-1" name="font" value={"20"} onClick={handleClick} >20px</button>
        <button className=" text-white bg-blue-400 rounded p-2 m-1" name="font" value={"34"} onClick={handleClick} >22px</button>
      </div>
      <p style={{
        background: property.bg,
        color: property.text ,
        fontSize: property.font+"px",

      }} 
      className="min-h-100 w-100 flex justify-center items-center border p-3">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis nihil
        rerum tempora facilis voluptates ipsum ullam ipsam, dolores doloribus
        iste veritatis quibusdam ipsa exercitationem dolorum excepturi
      </p>
      
    </div>
  );
};

export default StateTask5;
