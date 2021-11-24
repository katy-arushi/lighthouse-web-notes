import { useState } from "react";

export default function TodoForm(props){

    const [formData, setFormData] = useState({
        name: "",
        description: ""
    });

    // const handleNameChange = (event) => {
    //     const updateFormData = {...formData};
    //     updateFormData.name = event.target.value;

    //     setFormData(updateFormData)
    // }

    const handleChange = (event) => {
        const {name, value} = event.target;

        const updateFormData = {...formData};
        updateFormData[name] = value;

        setFormData(updateFormData)
    }

    const submit = (event) => {
        event.preventDefault();
        props.onSubmit(formData);

    }

    return(
        <form className="TodoForm" onSubmit={submit}>
            <input type="text" name="name" placeholder="Todo Name" 
                value={formData.name} onChange={handleChange} />
            <input type="text" name="description" placeholder="Todo description" 
                value = {formData.description} onChange={handleChange}/>
            <button type="submit">Add TODO</button>
        </form>
    );
}