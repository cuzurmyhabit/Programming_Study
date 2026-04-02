import { useState } from 'react';

function TodoListApp() {
    return (
        <>
            <h1>ToDoToDo</h1>
            <form action="">
                <input type="text" />
                <button>Add</button>
            </form>


            <ul>
                <li>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">옷 싸기</label>
                    <button>🤺</button>
                    <button>🗑️</button>
                </li>
                <li>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">잠 자기</label>
                    <button>🤺</button>
                    <button>🗑️</button>
                </li>
            </ul>
        </>
    );
}

export default TodoListApp;