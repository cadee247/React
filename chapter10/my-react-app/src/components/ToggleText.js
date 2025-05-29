import React, { useState } from "react";

const ToggleText = ({ text }) => {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <div>
            <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? "Hide Text" : "Show Text"}
            </button>
            {isVisible && <p>{text}</p>}
        </div>
    );
};

export default ToggleText;