import { useEffect, useState } from "react";

function Comp1() {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch("https://fakestoreapi.com/products");
                const data = await res.json();
                setProduct(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchProduct();
    }, []);

    return (
        <ul>
            {products.map(el => (
                <li key={el.id}>
                    <p>{el.title}</p>
                    <p>${el.price}</p>
                </li>
            ))}
        </ul>
    );
}

export default Comp1;
