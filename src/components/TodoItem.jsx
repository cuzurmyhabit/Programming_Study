import Checkbox from "./Checkbox";
import Button from "./Button";

export default function TodoItem() {
    return (
        <li className='todo__item todo__item--complete'>
            <Checkbox type="checkbox" className='todo__check' name="" id="ch-1" />
            <Button className='todo__button todo__button--edit'>🤺</Button>
            <Button className='todo__button todo__button--delete'>🗑️</Button>
        </li>
    );
}
