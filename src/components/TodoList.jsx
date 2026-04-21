import TodoItemEmpty from "./TodoItemEmpty";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, toggleTodo }) {
    return (
        //todo.isCompleted이 true면 todo__item--complete, false ""
        <ul className={`todo__item ${todos.some(t => t.isCompleted) ? 'todo__item--complete' : ""}`}>
            {/* todos가 없으면 todoItemEmpty */}
            {todos.length === 0 && <TodoItemEmpty />}
            {/* todos가 있으면 todoItem에 todos 던지기 */}
            {todos.length > 0 &&
             todos.map((todo) => (
                 <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
             ))}
            {/* todos에서 하나씩 꺼내서 todo -> <TodoItem todo={todo} /> */}
        </ul>
    );
}
