import React from "react";

const EventHandling = () => {

    const handleClick = (e : React.MouseEvent<HTMLButtonElement>) => {
        console.log("Button Clicked", e.currentTarget);
    };

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        console.log("Button MouseEnter", e.currentTarget);
    }


return (
    <div onMouseEnter={handleMouseEnter}>

        <h2>Event Handling Example</h2>
        <button onClick={handleClick}>Click me</button>

    </div>
)
}
export default EventHandling