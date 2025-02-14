
import {useState} from "react";
import UserProfile from "./components/UserProfile.tsx";
import TodoList from "./components/TodoList.tsx";

const App = () => {
    const [counter, setCounter] = useState<number>(0);
    return (
        <div>
            <h2>{counter}</h2>
            <button onClick={() => setCounter(counter + 1)}>Counter</button>
            <UserProfile />
            <TodoList/>
        </div>
    )
}
export default App
