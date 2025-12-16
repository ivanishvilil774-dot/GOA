import { useEffect, useState } from "react";

function Comp2() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); // new state for errors

    const fetchProducts = async () => {
        try {
            const res = await fetch("https://fakestoreapi.com/products");
            if (!res.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await res.json();
            setProducts(data);
        } catch (err) {
            console.error("Error fetching products:", err);
            setError(err.message);
        } finally {
            setLoading(false); // always stop loading
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <ul>
            {products.map((product) => (
                <li key={product.id}>{product.title}</li>
            ))}
        </ul>
    );
}

export default Comp2;
