import React, { useState } from 'react'

export default function Calculator(){
    const [num1, setNum1] = useState(0);
    const [num2,setNum2] = useState(0);
    const [result,setResult] = useState(0);
    const flag=false;
    function handleChange(event){
        setNumbers(
            
        )
    }
    
    function addition(){
        return(Number(num1)+Number(num2))
    }
    function subtraction(){
        return(Number(num1)-Number(num2))
    }
    function multiply(){
        return(Number(num1)*Number(num2))
    }
    function division(){
        return(Number(num1)/Number(num2))
    }
    function equals(){
        
    }
    return(
        <div className='calci-display'>
            <div className='input--boxes'>
                <input 
                    type="number"
                    placeholder='Enter 1st number'
                    onChange={(event)=>{setNum1(event.target.value)}}
                    name="num1" 
                    
                />
                <input 
                    type="number"
                    placeholder='Enter 2nd number'
                    onChange={(event)=>{setNum2(event.target.value)}}
                    name="num2"
                    
                />
                <input
                    type='number'
                    name='result'
                    value={result} 
                />
            </div>
            
            <div className="btns">
                <div className='btns--grp'>
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
                </div>
                <div className="btns--grp">
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
                
                <button
                    onClick={equals}
                >
                    =
                </button>
            </div>
            
        </div>
    )
}