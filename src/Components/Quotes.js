import React from "react";
import react, { useState } from 'react'
import {motion} from 'framer-motion'
import {MdChevronRight} from 'react-icons/md'
import axios from 'axios';

export default function Quotes(){
    let real_data="";
    const[quote,setQuote]=useState(real_data);
    const[author,setAuthor]=useState(real_data);

    const getNewQuotes=()=>{
        let value="";
        let rnum=Math.floor(Math.random()*10);
        value=real_data.quotes[rnum];
        setQuote(value.quote);
        setAuthor(value.author);
    }

    const getQuotes =async()=>{
        const api = "https://dummyjson.com/quotes";
        const data= await fetch(api)
        real_data = await data.json();
        getNewQuotes();
    }


    const NewTweetPost=()=>{
    let new_post=`https://twitter.com/intent/tweet?text=${quote}`;
    window.open(new_post);
    }

    return(
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
    )
}