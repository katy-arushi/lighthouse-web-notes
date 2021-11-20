import {useState} from 'react'

const useSetInput = () => {

    // As covered in lecture
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")

    // const handleEmail = e => {
    //     setEmail(e.target.value)
    // }
    // const handlePassword = e => {
    //     setPassword(e.target.value)
    // }


    const [input, setInput] = useState({
        email: "",
        password: "",
        opt: "--select--",
        options: ['student', 'teacher', 'admin']
    })

    // more complex but efficient way to handle any kind of inputs within your application
    // didnt cover this part in lecture
    const handleInput = (evt) => {
        const {name, value} = evt.target
        console.log(`name: ${value}`)
        setInput(prev => ({...prev, [name]: value }))
    }

    return {input, handleInput}

}

export default useSetInput