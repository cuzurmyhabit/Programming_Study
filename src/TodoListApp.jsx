//https://programming-study.s2472.workers.dev/
import "./todolist.css"
import { useState } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoAdder from "./components/TodoAdder";
import TodoList from "./components/TodoList";

class Todo{
    constructor(id, text, isCompleted){
        this.id = id;
        this.text = text;
        this.isCompleted = isCompleted;
    }
}
function TodoListApp() {

    const [todos, setTodos] = useState([]);
    function addTodo(text){
        // 이전 todos에 newTodo 만들어서 추가하자 -> 그것을 setTodos로 하자
        setTodos((todos) => [
            ...todos,   //todos에 있는 item을 다 꺼내서 새로운 리스트에 하나씩 넣자
            new Todo(
                Date.now(), // 고유 ID 시간을 이용 == new Date().getTime()
                text,   // 할 일 내용
                false    // 완료 여부
            )
        ]);
    }
    return (
        <div className="todo">
            <TodoHeader />
            <TodoAdder addTodo={addTodo} />
            {/* <TodoList /> */}
            <TodoList todos={todos} />
        </div>
    );
}

export default TodoListApp;