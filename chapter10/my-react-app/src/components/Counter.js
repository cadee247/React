import React, { useState } from "react";

const Counter = ({ startCount }) => {
    const [count, setCount] = useState(startCount);

    return (
        <div>
            <h3>Count: {count}</h3>
            <button onClick={() => setCount(count + 1)}>Increase Count</button>
        </div>
    );
};

export default Counter;