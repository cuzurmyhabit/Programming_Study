import Checkbox from "./Checkbox";
import Button from "./Button";

export default function TodoItem({ todo, toggleTodo, deleteTodo }) {
    return (
        <li className={`todo__item ${todo.isCompleted ? 'todo__item--complete' : ''}`}>
            <Checkbox
                type="checkbox"
                name=""
                id={`ch-${todo.id}`}
                checked={todo.isCompleted}
                onChange={() => toggleTodo(todo.id)}
            >
                {todo.text}
            </Checkbox>
            <Button className='todo__button todo__button--edit'>🤺</Button>
            <Button 
                className='todo__button todo__button--delete' 
                onClick={() => deleteTodo(todo.id)}>
                🗑️
            </Button>
        </li>
    );
}
