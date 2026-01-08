import { useState, useEffect } from "react";

function useFetch(url) {
    const [response, setResponse] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            setResponse(data);
        } catch (err) {
            console.log(err);
        }
        };

        fetchData();
    }, [url]);

    return response;
}

export default useFetch;
