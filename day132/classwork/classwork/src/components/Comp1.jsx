import useInfo from "../customHooks/useInfo";

function Comp1() {
    const { count, increase, decrease, reset } = useInfo();

    return (
        <div>
        <p>Count: {count}</p>

        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={reset}>Reset</button>
        </div>
    );
}

export default Comp1;
