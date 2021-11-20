// import React, {useState} from 'react'
import useColor from "../hooks/useColor"

// const colors = ['red', 'blue', 'lime']


const Color = (props) => {
    // const [index, setIndex] = useState(0)
    
    // const nextColor = () => {
    //     setIndex( index+1 )
    // }
    // const prevColor = () => {
    //     setIndex( index-1 )
    // }

    const {color, prevColor, nextColor} = useColor(props.colors)

    return(
        <div style={{backgroundColor: color}}>
            {/*  <div style={{backgroundColor: colors[index]}}> */}
            <h2> Color Changer</h2>
            <button onClick={prevColor}> PREV </button>
            <button onClick={nextColor}> NEXT </button>
        </div>
    )
}

export default Color