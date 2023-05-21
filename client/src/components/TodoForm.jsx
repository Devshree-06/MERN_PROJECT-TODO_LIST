import { useState } from "react";

import { addNewtodo } from "../redux/actions";

import{ useDispatch } from "react-redux";

const TodoForm = () => {

    const[text,setText]=useState("");//we have to store the value using state
    
    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();

        dispatch(addNewtodo(text));

        setText('');
    }
    const onInputChange =(e) => { //take value from event 
        setText(e.target.value);//temporarily stores the value
    }
    return(
        <form className='form' onSubmit={onFormSubmit}>
            <input 
                placeholder="Enter your items"
                className="input"
                onChange={onInputChange}//typing value in the input field
                value={text}
            />
        </form>
    )
}

export default TodoForm