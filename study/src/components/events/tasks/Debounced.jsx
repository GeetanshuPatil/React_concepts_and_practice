import React, { useState, useRef} from 'react'

const Debounced = () => {

  let quotesData = [{"id":1,"quote":"Your heart is the size of an ocean. Go find yourself in its hidden depths.","author":"Rumi"},{"id":2,"quote":"The Bay of Bengal is hit frequently by cyclones. The months of November and May, in particular, are dangerous in this regard.","author":"Abdul Kalam"},{"id":3,"quote":"Thinking is the capital, Enterprise is the way, Hard Work is the solution.","author":"Abdul Kalam"},{"id":4,"quote":"If You Can'T Make It Good, At Least Make It Look Good.","author":"Bill Gates"},{"id":5,"quote":"Heart be brave. If you cannot be brave, just go. Love's glory is not a small thing.","author":"Rumi"},{"id":6,"quote":"It is bad for a young man to sin; but it is worse for an old man to sin.","author":"Abu Bakr (R.A)"},{"id":7,"quote":"If You Are Out To Describe The Truth, Leave Elegance To The Tailor.","author":"Albert Einstein"},{"id":8,"quote":"O man you are busy working for the world, and the world is busy trying to turn you out.","author":"Abu Bakr (R.A)"},{"id":9,"quote":"While children are struggling to be unique, the world around them is trying all means to make them look like everybody else.","author":"Abdul Kalam"},{"id":10,"quote":"These Capitalists Generally Act Harmoniously And In Concert, To Fleece The People.","author":"Abraham Lincoln"},{"id":11,"quote":"I Don'T Believe In Failure. It Is Not Failure If You Enjoyed The Process.","author":"Oprah Winfrey"},{"id":12,"quote":"Do not get elated at any victory, for all such victory is subject to the will of God.","author":"Abu Bakr (R.A)"},{"id":13,"quote":"Wear gratitude like a cloak and it will feed every corner of your life.","author":"Rumi"},{"id":14,"quote":"If you even dream of beating me you'd better wake up and apologize.","author":"Muhammad Ali"},{"id":15,"quote":"I Will Praise Any Man That Will Praise Me.","author":"William Shakespeare"},{"id":16,"quote":"One Of The Greatest Diseases Is To Be Nobody To Anybody.","author":"Mother Teresa"},{"id":17,"quote":"I'm so fast that last night I turned off the light switch in my hotel room and was in bed before the room was dark.","author":"Muhammad Ali"},{"id":18,"quote":"People Must Learn To Hate And If They Can Learn To Hate, They Can Be Taught To Love.","author":"Nelson Mandela"},{"id":19,"quote":"Everyone has been made for some particular work, and the desire for that work has been put in every heart.","author":"Rumi"},{"id":20,"quote":"The less of the World, the freer you live.","author":"Umar ibn Al-Khattāb (R.A)"},{"id":21,"quote":"Respond to every call that excites your spirit.","author":"Rumi"},{"id":22,"quote":"The Way To Get Started Is To Quit Talking And Begin Doing.","author":"Walt Disney"},{"id":23,"quote":"God Doesn'T Require Us To Succeed, He Only Requires That You Try.","author":"Mother Teresa"},{"id":24,"quote":"Speak any language, Turkish, Greek, Persian, Arabic, but always speak with love.","author":"Rumi"},{"id":25,"quote":"Happiness comes towards those which believe in him.","author":"Ali ibn Abi Talib (R.A)"},{"id":26,"quote":"Knowledge is of two kinds: that which is absorbed and that which is heard. And that which is heard does not profit if it is not absorbed.","author":"Ali ibn Abi Talib (R.A)"},{"id":27,"quote":"When I am silent, I have thunder hidden inside.","author":"Rumi"},{"id":28,"quote":"Technological Progress Is Like An Axe In The Hands Of A Pathological Criminal.","author":"Albert Einstein"},{"id":29,"quote":"No One Would Choose A Friendless Existence On Condition Of Having All The Other Things In The World.","author":"Aristotle"},{"id":30,"quote":"Life is a gamble. You can get hurt, but people die in plane crashes, lose their arms and legs in car accidents; people die every day. Same with fighters: some die, some get hurt, some go on. You just don't let yourself believe it will happen to you.","author":"Muhammad Ali"}]

  let [search, setSearch] = useState("")
  let [filtered, setFiltered] = useState(quotesData)
  let [loading, setLoading] = useState(false)

  const timerRef = useRef(null)

  let handleChange = (e)=>{
    let value = e.target.value
    setSearch(value)
    setLoading(true)

    if(timerRef.current){
      clearTimeout(timerRef.current)
    }
    
    timerRef.current = setTimeout(()=>{
      let newData = quotesData.filter((obj)=> obj.quote.toLowerCase().includes(value.toLowerCase()))
      setFiltered(newData)
      setLoading(false)
    }, 1000)

  }


  
  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-100 to-purple-200 p-6">
      
      
      <div className="max-w-3xl mx-auto mb-10 text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Quote Search 🔍
        </h1>

        <input
          type="text"
          placeholder="Search quote..."
          value={search}
          onChange={handleChange}
          className="w-full p-4 rounded-2xl shadow-md border border-gray-300 
                     focus:outline-none focus:ring-2 focus:ring-indigo-400 
                     transition duration-300"
        />

        {loading && (
          <p className="mt-3 text-indigo-600 font-medium animate-pulse">
            Searching...
          </p>
        )}
      </div>

      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {filtered.length > 0 ? (
          filtered.map((obj) => (
            <div
              key={obj.id}
              className="bg-white p-6 rounded-2xl shadow-md 
                         hover:shadow-xl hover:-translate-y-1 
                         transition duration-300"
            >
              <p className="text-gray-700 mb-4 italic">
                “{obj.quote}”
              </p>

              <p className="text-right font-semibold text-indigo-600">
                ~ {obj.author}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-600 text-lg">
            No quotes found 😢
          </p>
        )}
      </div>
    </div>
  );
};

export default Debounced
