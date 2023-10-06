import { useSelector } from "react-redux";


const Counter = () => {
    const count = useSelector((state) => state.counter.value);

    return (
        <h1 className="counter">{count}</h1>
    );
};

export default Counter;
