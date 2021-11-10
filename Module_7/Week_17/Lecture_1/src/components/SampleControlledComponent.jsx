import { useState } from "react";

export default function SampleControlledComponent(){

    const [value, setValue] = useState("");
    // const value = myState[0];
    // const setValue = myState[1];
    const handleChange = (event) => {
        setValue(event.target.value)
    }
    return(
        <label>
            My Controlled Component:
            <input type="text" value={value} onChange={handleChange}/>
        </label>
    );




}