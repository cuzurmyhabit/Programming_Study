//https://programming-study.s2472.workers.dev/
import "./todolist.css"
import Button from "./components/Button";
import Checkbox from "./components/Checkbox";
import TodoItemEmpty from "./components/TodoItemEmpty";

function TodoListApp() {
    return (
        <div className="todo">
            <h1 className="todo__title">ToDoToDo</h1>
            <form className="todo__form">
                <input type="text" className='todo__input' placeholder='할 일을 입력하세용' />
                <Button type='submit' className='todo__button todo__button--add'>Add</Button>
            </form> 

            <ul className='todo__list'>
                <TodoItemEmpty />
                <li className="todo__item todo__item--empty"></li>
                <li className='todo__item todo__item--complete'>
                    <Checkbox type="checkbox" className='todo__check' name="" id="ch-1"/>
                    <Button className='todo__button todo__button--edit'>🤺</Button>
                    <Button className='todo__button todo__button--delete'>🗑️</Button>
                </li>
            </ul>
        </div>
    );
}

export default TodoListApp;