import Button from "./Button";
import { useState } from "react";

export default function TodoAdder({ addTodo }) {    // const { addTodo } = props;
    const [inputTodo, setInputTodo] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault(); // 기본 동작 막기
        if(!inputTodo.trim()) return;   // input이 비어있거나 공백만 있는 경우 추가하지 않음
        addTodo(inputTodo.trim());     // input에 있는 text value를 할 일 내용으로 추가
        setInputTodo('');      // input 초기화
    }

    return (
        <form className="todo__form" onSubmit={handleSubmit}>
            <input
                type="text"
                className='todo__input'
                placeholder='할 일을 입력하세요'
                value={inputTodo}
                onChange={(event) => setInputTodo(event.target.value)}
            />
            <Button type='submit' className='todo__button todo__button--add'>Add</Button>
        </form>
    )
}