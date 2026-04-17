import React, { useReducer } from "react";

const UseReducerTask2 = () => {
  let initial = {
    background: "white",
    color: "black",
    fontSize : "16px",
  };
  let reducer = (state, action) => {
    switch (action.property) {
      case "bg":
        return {
          ...state,
          background: action.payload,
        };
        break;
      case "txt":
        return {
          ...state,
          color: action.payload,
        };
      case "font":
        return {
          ...state,
          fontSize: action.payload,
        };

        break;

      default:
        break;
    }
  };
  let [css, dispatch] = useReducer(reducer, initial);
  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <div
        style={{
          background: css.background,
          color: css.color,
          fontSize: css.fontSize,
        }}
        className=" flex  justify-center items-center border-3 h-125 w-125 p-5 "
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ratione sit eveniet nostrum, vero culpa autem iste qui ad hic minima odit dolores eum dicta quo aliquid laboriosam doloremque. Laudantium.
      </div>
      <div className="flex w-[90vw] justify-around m-3">
        <button
          className="bg-black text-white p-2"
          onClick={() => {
            dispatch({
              property: "bg",
              payload: "black",
            });
          }}
        >
          Bg-red
        </button>
        <button
          className="bg-green-500 p-2"
          onClick={() => {
            dispatch({
              property: "bg",
              payload: "green",
            });
          }}
        >
          Bg-green
        </button>
        <button
          className="bg-blue-500 p-2"
          onClick={() => {
            dispatch({
              property: "bg",
              payload: "blue",
            });
          }}
        >
          Bg-blue
        </button>
        <button
          className="bg-white-500 border p-2"
          onClick={() => {
            dispatch({
              property: "bg",
              payload: "white",
            });
          }}
        >
          Bg-white
        </button>
      </div>



      <div className="flex w-[90vw] justify-around m-3">
        <button
          className="bg-black text-white p-2"
          onClick={() => {
            dispatch({
              property: "txt",
              payload: "black",
            });
          }}
        >
          text-red
        </button>
        <button
          className="bg-green-500 p-2"
          onClick={() => {
            dispatch({
              property: "txt",
              payload: "red",
            });
          }}
        >
          text-red
        </button>
        <button
          className="bg-blue-500 p-2"
          onClick={() => {
            dispatch({
              property: "txt",
              payload: "blue",
            });
          }}
        >
          text-blue
        </button>
        <button
          className="bg-white-500 border p-2"
          onClick={() => {
            dispatch({
              property: "txt",
              payload: "white",
            });
          }}
        >
          text-white
        </button>
      </div>

      <div className="flex w-[90vw] justify-around m-3">
        <button
          className="bg-gray-500 p-2"
          onClick={() => {
            dispatch({
              property: "font",
              payload: "16px",
            });
          }}
        >
          font-16
        </button>
        <button
          className="bg-gray-500 p-2"
          onClick={() => {
            dispatch({
              property: "font",
              payload: "20px",
            });
          }}
        >
          font-20
        </button>
        <button
          className="bg-gray-500 p-2"
          onClick={() => {
            dispatch({
              property: "font",
              payload: "22px",
            });
          }}
        >
          font-22
        </button>
        <button
          className="bg-gray-500 border p-2"
          onClick={() => {
            dispatch({
              property: "font",
              payload: "24px",
            });
          }}
        >
          font-24
        </button>
      </div>
    </div>
  );
};

export default UseReducerTask2;
