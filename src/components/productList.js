import React from "react";
import "../styles/productList.css";
import Product from "./product";
import { products } from "../data";

const ProductList = () => {
  return (
    <div className="p-list">
      <div className="p-list__texts">
        <h1 className="p-list__title">Create & inspire. It's Pembe</h1>
        <p className="p-list__desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam. Labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
      </div>

      <div className="p-list__list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
