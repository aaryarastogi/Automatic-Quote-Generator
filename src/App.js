import './App.css';
import react, { useState } from 'react'
import {motion} from 'framer-motion'
import {MdChevronRight} from 'react-icons/md'

function App() {
  let real_data="";
  const[quote,setQuote]=useState(real_data);
  const[author,setAuthor]=useState(real_data);
  const getNewQuotes=()=>{
      let value="";
      let rnum=Math.floor(Math.random()*10);
      value=real_data[rnum];
      console.log(value);
      setQuote(value.text);
      setAuthor(value.author);
  }
  const getQuotes =async()=>{
    const api = "https://type.fit/api/quotes";
    const data= await fetch(api);
    real_data = await data.json();
    // console.log(real_data[0]);
    getNewQuotes();
}
const NewTweetPost=()=>{
  let new_post=`https://twitter.com/intent/tweet?text=${quote}`;
  window.open(new_post);
}
  return (
    <div className="App">
      <div className='second'>
      {
      quote ?(
      <div>
        <h2>{quote}</h2>
        <h3>~ {author}</h3>
      </div>)
     : <h1>Add Some Quote</h1>
}
      <div className='buttons'>
      <button onClick={getQuotes} className='button'>Next</button>
      <button onClick={NewTweetPost} className='button'>Tweet</button>
      </div>
      </div>
    </div>
  );
}

export default App;
