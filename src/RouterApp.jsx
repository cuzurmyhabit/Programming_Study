import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import CounterApp from './CounterApp.jsx'
import TodoListApp from './TodoListApp.jsx'

function LinkButtonPageApp() {
    return (
        <>
            <h1>App 목록</h1>
            <ul>
                <li><Link to="/counterapp">🙈Counter App</Link></li>
                <li><Link to="/todolistapp">🙉Todo List App</Link></li>
            </ul>
        </>
    )
}

export default function RouterApp() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LinkButtonPageApp />}></Route>
                    <Route path="/counterapp" element={<CounterApp />}></Route>
                    <Route path="/todolistapp" element={<TodoListApp />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}