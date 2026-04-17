import axios from "axios";
import React, { useEffect, useState } from "react";

const AxiosQuote = () => {

  let [quote, setQuote] = useState([]);

  let [state, setState] = useState({
    quote: "",
    author: "",
    id: ""
  });

  // GET REQUEST
  useEffect(() => {
    fetchQuotes();
  }, []);

  let fetchQuotes = () => {
    axios.get("http://localhost:8080/quotes")
      .then((res) => {
        setQuote(res.data);
      })
      .catch((err) => console.log(err));
  };

  // INPUT CHANGE
  let handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  // ADD QUOTE (POST)
  let handleClick = () => {

    if(state.id){
      // UPDATE (PUT)
      axios.put(`http://localhost:8080/quotes/${state.id}`, state)
      .then(()=>{
        fetchQuotes();
        resetForm();
      })
    }

    else{
      axios.post("http://localhost:8080/quotes", {
        ...state,
        id: Date.now()
      })
      .then(()=>{
        fetchQuotes();
        resetForm();
      })
    }

  };

  let resetForm = () => {
    setState({
      quote: "",
      author: "",
      id: ""
    });
  };

  // DELETE
  let handleDelete = (id) => {

    axios.delete(`http://localhost:8080/quotes/${id}`)
    .then(()=>{
      fetchQuotes();
    });

  };

  // UPDATE
  let handleUpdate = (obj) => {

    setState({
      quote: obj.quote,
      author: obj.author,
      id: obj.id
    });

  };

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-200 to-purple-300 flex justify-center py-12">

      <div className="w-96 space-y-8">

        <div className="bg-white/40 backdrop-blur-lg p-6 rounded-3xl shadow-xl border border-white/30 space-y-4">

          <input
            type="text"
            name="quote"
            value={state.quote}
            onChange={handleChange}
            placeholder="Type a quote..."
            className="w-full px-4 py-2 bg-white/70 rounded-xl outline-none"
          />

          <input
            type="text"
            name="author"
            value={state.author}
            onChange={handleChange}
            placeholder="Author name..."
            className="w-full px-4 py-2 bg-white/70 rounded-xl outline-none"
          />

          <button
            onClick={handleClick}
            className="w-full py-2 bg-indigo-500 text-white rounded-xl"
          >
            {state.id ? "Update Quote" : "Add Quote"}
          </button>

        </div>

        {quote.map((obj) => (

          <div
            key={obj.id}
            className="bg-white/40 backdrop-blur-md p-5 rounded-2xl border border-white/30"
          >

            <p>{obj.quote}</p>
            <p className="text-sm">{obj.author}</p>

            <div className="flex gap-3 mt-3">

              <button
                onClick={() => handleUpdate(obj)}
                className="px-3 py-1 bg-indigo-400 text-white rounded-md"
              >
                Update
              </button>

              <button
                onClick={() => handleDelete(obj.id)}
                className="px-3 py-1 bg-purple-400 text-white rounded-md"
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default AxiosQuote;