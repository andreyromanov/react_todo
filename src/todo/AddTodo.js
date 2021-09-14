import React, {useState} from "react";
import PropTypes from "prop-types";

function useInputValue(defaultValue = ''){
    const [value, setValue] = useState(defaultValue);

    return {
        bind : {
            value,
            onChange: event => setValue(event.target.value)
        },
        clear : () => setValue(''),
        value : () => value
    }
}

function AddTodo({onCreate}){
    //const [value, setValue] = useState('');
    const input = useInputValue('');
    function submitHandler(event){
        event.preventDefault();
        if(input.value().trim){
            onCreate(input.value());
            //setValue('');
            input.clear();
        }
    }
    return(
        <form className="addForm" onSubmit={submitHandler}>
            <input {...input.bind}/>
            <button type="submit">Add Todo</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate : PropTypes.func.isRequired
}

export default AddTodo;