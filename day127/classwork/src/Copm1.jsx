import { useState } from "react";

function Comp1() {
    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        try {
            const res = await fetch("https://fakestoreapi.com/products/");
            const data = await res.json();
            setProducts(data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }

    fetchProducts()

    return (
        <div>
            {
                products.map((el, i) => {
                    return(
                        <div key={i}>
                            <h3>{el.title}</h3>
                            <p>{el.price}$</p>
                            <img src={el.image} alt={el.title} width="100px" />
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Comp1;