import React, { useState, useEffect } from 'react';
import './QuoteBox.scss';
import quotes from '../data/quotes'
import colors from '../data/colors'

const QuoteBox = (props)=>{
    const [randomIndexQuotes, setRandomQuote] = useState(Math.floor(Math.random() * quotes.length));
    const { quote, author } = quotes[randomIndexQuotes];
    const [isVisible, setIsVisible] = useState(true)

    const handlerClick = () => {
        setIsVisible(false)
        setTimeout(()=>{
            setRandomQuote(Math.floor(Math.random() * quotes.length)); 
            setIsVisible(true)   
            props.updateColorProp(colors[Math.floor(Math.random() * colors.length)])
        },400)
    }

    useEffect(()=>{
        props.updateColorProp(colors[Math.floor(Math.random() * colors.length)]);
    },[props]);
   

    const[isHover, setIsHover] = useState(false)
    
    const handleMouseEnter = () => setIsHover(true);
    const handleMouseLeave = () => setIsHover(false);   

    const tweetStyle = {
        color: isHover ? props.colorProp : '#eee',
        backgroundColor: isHover ? '#ddd' : props.colorProp,
        transition: 'all .5s',
    }

    let href = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(quote) + "&hashtags="
    console.log(href)

    return(
    <blockquote id="quote-box">    
        <p id='text' className={`text-box ${isVisible ? '' : 'hidden'}`} style={{color:props.colorProp}}><i className="fa-solid fa-quote-left"></i> {quote}</p>
        <cite id='author' className={`text-box ${isVisible ? '' : 'hidden'}`} style={{color:props.colorProp}}>{author}</cite>
        <div className='btn-container'>
            <a 
              style={tweetStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              id='tweet-quote' 
              href={href} 
              target='_blank'
              rel="noreferrer">
                <i className='fa-brands fa-twitter'></i>
            </a>
            <button id='new-quote' onClick={handlerClick} style={{backgroundColor:props.colorProp}}>New quote</button>
        </div>
    </blockquote>
    )
}

export default QuoteBox;
