import Checkbox from "./Checkbox";
import Button from "./Button";

export default function TodoItem({ todo }) {
    return (
        <li className='todo__item todo__item--complete'>
            <Checkbox type="checkbox"  name="" id={`ch-${todo.id}`}>{todo.text}</Checkbox>
            <Button className='todo__button todo__button--edit'>🤺</Button>
            <Button className='todo__button todo__button--delete'>🗑️</Button>
        </li>
    );
}
