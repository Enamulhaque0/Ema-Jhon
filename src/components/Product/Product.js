import React from "react";
import "./Product.css";

const Product = ({ product, handleAddToCart }) => {
  const { name, img, seller, price, ratings } = product;
  return (
    <div>
      <div className="card card-compact rounded-xl border  bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-70 h-64 rounded-xl mt-3"
            src={img ? img : "N/A"}
            alt="Shoes"
          />
        </figure>
        <div className="card-body relative h-56">
          <h2 className="card-title">{name.slice(0, 20) + "..."}</h2>
          <h4 className="left-2">Price: ${price}</h4>
          <p>Manufacturer : {seller}</p>

          <p className="mb-3">Rating : {ratings} star</p>
          <button
            onClick={() => handleAddToCart(product)}
            id="btn-add-to-cart"
            className="p-3 absolute inset-x-0 bottom-0"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
