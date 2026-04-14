import Button from "./Button";
import { useState } from "react";

export default function TodoAdder( {addTodo} ) {    // const addTodo = props.addTodo; -> 구조분해할당
    const [inputTodo, setInputTodo] = useState("");
    const handleSubmit = (event) => {
        addTodo(inputTodo);   // input에 있는 text value를 할일내용으로 추가
        
    }
    
    return (
        <form className="todo__form" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    className='todo__input' 
                    placeholder='할 일을 입력하세용' 
                    value={inputTodo}
                    onChange={(event) => setInputTodo(event.target.value)}
                />
                <Button type='submit' className='todo__button todo__button--add'>Add</Button>
            </form> 
    )
}