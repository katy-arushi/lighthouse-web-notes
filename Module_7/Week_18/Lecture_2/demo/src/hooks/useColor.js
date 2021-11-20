import {useState} from 'react' 

const useColor = (arr) => {
    const colors = [...arr]

    const [index, setIndex] = useState(0)
    
    const nextColor = () => {
        if(index >= colors.length){
            setIndex(0)
        } else {
            setIndex( index+1 )
        }
    }
    const prevColor = () => {
        setIndex( index-1 )
    }

    let color = colors[index]

    return {color, nextColor, prevColor}

}

export default useColor