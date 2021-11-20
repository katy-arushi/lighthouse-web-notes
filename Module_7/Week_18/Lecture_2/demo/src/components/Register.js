import React, {useState} from 'react'

const Register = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }

    return (
        <>
        <h1>
            Register Form
        </h1>
        <form onSubmit={(e) => {e.preventDefault(); console.log(email)}}>
            {/* <input defaultValue="ttyt" onChange={e => console.log(e.target.value)} /> */}
            <input name="email" value={email} onChange={handleEmailChange}/>
            <input name="password" value={password} onChange={e => setPassword(e.target.value)}/>
            
            <button> Submit </button>
        </form>
        </>
    )
}

export default Register