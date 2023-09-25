import { useState } from "react";

const StateForm = () => {
    const [inputValue, setInputValue] = useState(null)

    const handleChange = e => {
        setInputValue(e.target.value)
    } ;
    const handleOnSubmit = e =>{
        e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input onChange={handleChange} type="email" name="Email" id="" />
                <br />
                <input onChange={handleChange} type="password" name="" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p>You are typing : {inputValue}</p>
        </div>
    );
};

export default StateForm;