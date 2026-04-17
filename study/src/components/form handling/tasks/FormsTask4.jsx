import React, { useState } from "react";

const FormsTask4 = () => {
  let data = [
    {
      id: 1,
      quote:
        "Your heart is the size of an ocean. Go find yourself in its hidden depths.",
      author: "Rumi",
    },
    {
      id: 2,
      quote:
        "The Bay of Bengal is hit frequently by cyclones. The months of November and May, in particular, are dangerous in this regard.",
      author: "Abdul Kalam",
    },
    {
      id: 3,
      quote:
        "Thinking is the capital, Enterprise is the way, Hard Work is the solution.",
      author: "Abdul Kalam",
    },
    {
      id: 4,
      quote: "If You Can'T Make It Good, At Least Make It Look Good.",
      author: "Bill Gates",
    },
    {
      id: 5,
      quote:
        "Heart be brave. If you cannot be brave, just go. Love's glory is not a small thing.",
      author: "Rumi",
    },
    {
      id: 6,
      quote:
        "It is bad for a young man to sin; but it is worse for an old man to sin.",
      author: "Abu Bakr (R.A)",
    },
    {
      id: 7,
      quote:
        "If You Are Out To Describe The Truth, Leave Elegance To The Tailor.",
      author: "Albert Einstein",
    },
    {
      id: 8,
      quote:
        "O man you are busy working for the world, and the world is busy trying to turn you out.",
      author: "Abu Bakr (R.A)",
    },
    {
      id: 9,
      quote:
        "While children are struggling to be unique, the world around them is trying all means to make them look like everybody else.",
      author: "Abdul Kalam",
    },
    {
      id: 10,
      quote:
        "These Capitalists Generally Act Harmoniously And In Concert, To Fleece The People.",
      author: "Abraham Lincoln",
    },
    {
      id: 11,
      quote:
        "I Don'T Believe In Failure. It Is Not Failure If You Enjoyed The Process.",
      author: "Oprah Winfrey",
    },
    {
      id: 12,
      quote:
        "Do not get elated at any victory, for all such victory is subject to the will of God.",
      author: "Abu Bakr (R.A)",
    },
    {
      id: 13,
      quote:
        "Wear gratitude like a cloak and it will feed every corner of your life.",
      author: "Rumi",
    },
    {
      id: 14,
      quote:
        "If you even dream of beating me you'd better wake up and apologize.",
      author: "Muhammad Ali",
    },
    {
      id: 15,
      quote: "I Will Praise Any Man That Will Praise Me.",
      author: "William Shakespeare",
    },
    {
      id: 16,
      quote: "One Of The Greatest Diseases Is To Be Nobody To Anybody.",
      author: "Mother Teresa",
    },
    {
      id: 17,
      quote:
        "I'm so fast that last night I turned off the light switch in my hotel room and was in bed before the room was dark.",
      author: "Muhammad Ali",
    },
    {
      id: 18,
      quote:
        "People Must Learn To Hate And If They Can Learn To Hate, They Can Be Taught To Love.",
      author: "Nelson Mandela",
    },
    {
      id: 19,
      quote:
        "Everyone has been made for some particular work, and the desire for that work has been put in every heart.",
      author: "Rumi",
    },
    {
      id: 20,
      quote: "The less of the World, the freer you live.",
      author: "Umar ibn Al-Khattāb (R.A)",
    },
    {
      id: 21,
      quote: "Respond to every call that excites your spirit.",
      author: "Rumi",
    },
    {
      id: 22,
      quote: "The Way To Get Started Is To Quit Talking And Begin Doing.",
      author: "Walt Disney",
    },
    {
      id: 23,
      quote:
        "God Doesn'T Require Us To Succeed, He Only Requires That You Try.",
      author: "Mother Teresa",
    },
    {
      id: 24,
      quote:
        "Speak any language, Turkish, Greek, Persian, Arabic, but always speak with love.",
      author: "Rumi",
    },
    {
      id: 25,
      quote: "Happiness comes towards those which believe in him.",
      author: "Ali ibn Abi Talib (R.A)",
    },
    {
      id: 26,
      quote:
        "Knowledge is of two kinds: that which is absorbed and that which is heard. And that which is heard does not profit if it is not absorbed.",
      author: "Ali ibn Abi Talib (R.A)",
    },
    {
      id: 27,
      quote: "When I am silent, I have thunder hidden inside.",
      author: "Rumi",
    },
    {
      id: 28,
      quote:
        "Technological Progress Is Like An Axe In The Hands Of A Pathological Criminal.",
      author: "Albert Einstein",
    },
    {
      id: 29,
      quote:
        "No One Would Choose A Friendless Existence On Condition Of Having All The Other Things In The World.",
      author: "Aristotle",
    },
    {
      id: 30,
      quote:
        "Life is a gamble. You can get hurt, but people die in plane crashes, lose their arms and legs in car accidents; people die every day. Same with fighters: some die, some get hurt, some go on. You just don't let yourself believe it will happen to you.",
      author: "Muhammad Ali",
    },
  ];
  let [quote, setQuote] = useState(data);

  let [state, setState] = useState({
    quote: "",
    author: "",
    id: Date.now(),
  });

  let handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  let handleClick = () => {
    setQuote([...quote, state]);
    // console.log(quote);
    setState({
        quote: "",
        author: "",
        id: Date.now(),
    });
  };

  let handleUpdate = (sentObj) => {
    setState({
      quote: sentObj.quote,
      author: sentObj.author,
      id: sentObj.id,
    });
    handleDelete(sentObj);
  };

  let handleDelete = (sentObj) => {
    let newQuote = quote.filter((val) => {
      return val.id != sentObj.id;
    });
    setQuote(newQuote);

    console.log(newQuote);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
      {/* Form Card */}
      <div className="bg-gray-800 w-96 p-6 rounded-xl shadow-xl">
        <h2 className="text-xl font-bold text-white mb-4 text-center">
          Add Quote
        </h2>

        <div className="flex flex-col gap-3">
          <input
            type="text"
            name="quote"
            value={state.quote}
            onChange={handleChange}
            placeholder="Enter quote..."
            className="w-full h-12 px-4 rounded-lg bg-gray-700 text-white
                   placeholder-gray-400 outline-none
                   focus:ring-2 focus:ring-blue-500 transition"
          />

          <input
            type="text"
            name="author"
            value={state.author}
            onChange={handleChange}
            placeholder="Enter author..."
            className="w-full h-12 px-4 rounded-lg bg-gray-700 text-white
                   placeholder-gray-400 outline-none
                   focus:ring-2 focus:ring-blue-500 transition"
          />

          <button
            onClick={handleClick}
            className="w-full h-12 rounded-lg bg-blue-500 hover:bg-blue-600
                   text-white font-semibold transition-all duration-300"
          >
            Add Quote
          </button>
        </div>
      </div>

      {/* Output Section */}
      <div className="w-96 mt-6 space-y-4">
        {quote.map((obj) => (
          <div
            key={obj.id}
            className="bg-gray-800 p-4 rounded-xl shadow-md 
                 hover:bg-gray-700 transition duration-300"
          >
            <p className="text-gray-200 italic text-lg">"{obj.quote}"</p>

            <div className="flex justify-between items-center mt-4">
              {/* Left Section */}
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-300 bg-gray-700 px-2 py-1 rounded-md">
                  #{obj.id}
                </span>
                <p className="text-sm text-gray-400">- {obj.author}</p>
              </div>

              {/* Right Section (Buttons) */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    handleUpdate(obj);
                  }}
                  className="px-3 py-1 text-sm font-medium rounded-md
                 bg-yellow-500 hover:bg-yellow-600
                 text-white transition duration-300"
                >
                  Update
                </button>

                <button
                  onClick={() => {
                    handleDelete(obj);
                  }}
                  className="px-3 py-1 text-sm font-medium rounded-md
                 bg-red-500 hover:bg-red-600
                 text-white transition duration-300"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FormsTask4;
