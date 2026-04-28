import { useEffect, useState } from "react";
import "./todolist.css"
import Button from "./components/Button.jsx"
import CheckBox from "./components/CheckBox.jsx";
import TodoItemEmpty from "./components/TodoItemEmpty.jsx";
import TodoHeader from "./components/TodoHeader.jsx";
import TodoAdder from "./components/TodoAdder.jsx";
import TodoItem from "./components/TodoItem.jsx";
import TodoList from "./components/TodoList.jsx";

class Todo {
    constructor(id, text, isCompleted) {
        this.id = id;
        this.text = text;
        this.isCompleted = isCompleted;
    }
}

const TODOS_STORAGE_KEY = "todos";  // LocalStorage용 key

function TodoListApp() {
    //localStorage에서 가져오자
    const initTodos = () => {
        const savedTodos = localStorage.getItem(TODOS_STORAGE_KEY);
        //값이 없으면 []
        //값이 있으면 todos의 초기값 대입하자
        return (!savedTodos) ? [] : JSON.parse(savedTodos); //string -> JSON 객체 또는 리스트
    }

    const [todos, setTodos] = useState(initTodos());

    //todos 변경 시 localStorage에 저장하자
    useEffect(() => {
        localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos)); //JSON 객체 또는 리스트 -> string
    }, [todos]);

    function addTodo(text) {
        setTodos((todos) => [
            ...todos,
            new Todo(
                Date.now(),
                text,
                false
            )
        ]);
    }

    function toggleTodo(id) {
        setTodos((todos) =>
            todos.map((todo) =>
                todo.id === id
                    ? { ...todo, isCompleted: !todo.isCompleted }
                    : todo
            )
        );
    }
    function deleteTodo(id) {
        // todos를 하나씩 꺼내어 todo, todo.id === id
        setTodos((todos) =>
            todos.filter((todo) => todo.id !== id)
        )
    }

    function editTodo(id, newText) {
        // todos 하나씩 꺼내어 todo.id가 같으면 text: newText
        setTodos((todos) =>
            todos.map((todo) =>
                todo.id === id ? { ...todo, text: newText } : todo
            )
        )
    }

    return (
        <div className="todo">
            <TodoHeader />
            <TodoAdder addTodo={addTodo} />
            <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} editTodo={editTodo} />
        </div>
    );
}

export default TodoListApp;