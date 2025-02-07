// const counter = () => {
//     let count = 0;
//     return () => {
//         count += 1;
//         console.log(count); // count 값을 출력
//         return count;
//     };
// };

// export default counter;

import React, { useState } from "react";

const Counter = ({ initialCount = 0 }) => {
    const [count, setCount] = useState(initialCount);

    const increment = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <p>Current Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
};

export default Counter;
