import React, { useState } from 'react'
import './book.css'

function Book(props) {
    const [count,setCount] = useState(0)
    function increase(){
        setCount(count+1);
    }
    function decrease(){
        if(count>0){
            setCount(count-1);
        }
    }
    return (
            <div id='book'>
                <img src={props.img} alt="Book" height={100} />
                <h1>Title:{props.title}</h1>
                <h1>{props.price}</h1>
                <br />
                <button>Add to Cart : </button>
                <span>+</span>
                <span>{count}</span>
                <span>-</span>
            </div>
    )
}

export default Book
