import React, { useState } from 'react'

export default function Calculator(){
    const [num1, setNum1] = useState(0);
    const [num2,setNum2] = useState(0);
    const [result,setResult] = useState(0);

    function handleChange(event){
        setNumbers(
            
        )
    }
    function addition(){
        setResult(Number(num1)+Number(num2))
    }
    function subtraction(){
        setResult(Number(num1)-Number(num2))
    }
    function multiply(){
        setResult(Number(num1)*Number(num2))
    }
    function division(){
        setResult(Number(num1)/Number(num2))
    }
    return(
        <div className='calci-display'>
            <div>
                <input 
                    type="number"
                    placeholder='Enter 1st number'
                    onChange={(event)=>{setNum1(event.target.value)}}
                    name="num1" 
                    // value={result}
                />
                <input 
                    type="number"
                    placeholder='Enter 2nd number'
                    onChange={(event)=>{setNum2(event.target.value)}}
                    name="num2"
                    // value={result}
                />
            </div>
            <div>
                
            </div>
            <div className="btns">
                <button
                    onClick={addition}
                >
                    +
                </button>
                <button
                    onClick={subtraction}
                >
                    -
                </button>
                <button
                    onClick={multiply}
                >
                    *
                </button>
                <button
                    onClick={division}
                >
                    /
                </button>
            </div>
            {result}
        </div>
    )
}