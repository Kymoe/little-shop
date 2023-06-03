import { useState, useEffect } from "react";
import "./Raddit.css";
export default function Raddit() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <section>
      <h1 className="title">Store Items</h1>
      <ul className="product-list">
        {products.map((product) => (
          <li className="product" key={product.id}>
            <img className="product-img" src={product.image} alt="" />
            {product.title}
          </li>
        ))}
      </ul>
    </section>
  );
}
