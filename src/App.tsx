
import {useState} from "react";
import UserProfile from "./components/UserProfile.tsx";
import TodoList from "./components/TodoList.tsx";
import Form from "./components/Form.tsx";
import FocusInput from "./components/FocusInput.tsx";
import ContactForm from "./components/ContactForm.tsx";
import EventHandling from "./components/EventHandling.tsx";

const App = () => {
    const [counter, setCounter] = useState<number>(0);
    return (
        <div>
            {/*<h2>{counter}</h2>*/}
            {/*<button onClick={() => setCounter(counter + 1)}>Counter</button>*/}
            {/*<UserProfile />*/}
            {/*<TodoList/>*/}
            {/*<Form/>*/}
            {/*<FocusInput/>*/}
            {/*<ContactForm/>*/}
            <EventHandling/>
        </div>
    )
}
export default App
