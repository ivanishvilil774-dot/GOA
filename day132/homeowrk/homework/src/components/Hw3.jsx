import useFetch from "./customHooks/useFetch";

function Hw3() {
    const data = useFetch("https://jsonplaceholder.typicode.com/posts");


    if (!data.length) return <h1>Loading...</h1>;


    return (
        <div>
            <h1>Homework 3</h1>
            <p>
                {
                    data.map(item => {
                        return <div key={item.id}>
                            <h2>{item.title}</h2>
                            <p>{item.body}</p>
                            
                        </div>
                    })
                }
            </p>
        </div>
    );
}

export default Hw3;