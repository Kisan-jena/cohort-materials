import React from 'react';
import { useState } from 'react';

export default function App(){
    const [count,setCount]=useState(0);

    function onClickHandler(){
        setCount(count+1);
    }

    return(
        <div>
        <button id='btn' onClick={onClickHandler} >Counter {count}</button>
        </div>
    )
}    

                                         // ! OR

export default function App(){
    const [count,setCount]=useState(0);

    function onClickHandler(){
        setCount(count+1);
    }

    return(
        <div>
            <Button onClickHandler={onClickHandler}></Button>
        </div>
    );
}    


function Button(props){
    return ( 
    <button onClick={props.onClickHandler} >
        Counter{count} 
    </button>
    );
}