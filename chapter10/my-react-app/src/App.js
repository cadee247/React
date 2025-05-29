import React from "react";
import ToggleText from "./components/ToggleText";
import Counter from "./components/Counter";


const App = () => {
    return (
        <div>
            <h1>React Components Example</h1>
            <ToggleText text="Hello, welcome Cadee!" />
            <Counter startCount={0} />
        </div>
    );
};

export default App;