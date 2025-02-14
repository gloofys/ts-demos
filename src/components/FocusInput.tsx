import {useEffect, useRef} from "react";

const FocusInput = () => {

    const inputField = useRef<HTMLInputElement>(null)

useEffect(() => {
    inputField.current?.focus()
})
    const handleClick = () => {
        inputField.current?.focus()
    }

    return (
        <div>

            <input type="text" ref={inputField} />
            <button onClick={handleClick}>click</button>


        </div>

    )
}
export default FocusInput