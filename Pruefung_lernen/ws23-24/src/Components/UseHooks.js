import { useState, useEffect } from "react";

const UseHooks = () => {
    const [message, setMessage] = useState("Hello, World!");
    return message, setMessage;
};

export default UseHooks;
