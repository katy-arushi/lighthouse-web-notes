import React from 'react'
import useSetInput from '../hooks/useSetInput'

const Login = () => {

const {input, handleInput} = useSetInput()
const opts = input.options.map((opt, idx) =>  <option  key={idx} value={opt} label={opt}/>)
    return (
        <>
        <h1>
            Login Form
        </h1>
        <form onSubmit={(e) => {e.preventDefault(); console.log(input)}}>
             {/* <input value={email} onChange={handleEmail}/>
            <input 
                name="password"
                value={password} 
                onChange={handlePassword}
            />
            <button onClick={increment}> increase </button> */}

            {/* more complex example using a single handleInput Function */}
            <input name="email" value={input.email} onChange={handleInput}/>
            <input name="password" value={input.password} onChange={handleInput}/>
            
            {/* BONUS - dropdown kind of input */}
            <select name="opt" value={input.opt} onChange={handleInput}>
                { opts }  
            </select>
            <button> Submit </button>
        </form>
        </>
    )
}

export default Login