import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import { Icon } from '@iconify/react';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(
      `https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div className="mt-12">
      <div className="flex justify-around ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            ></Product>
          ))}
        </div>

        <div>
          <div className="card w-80  bg-base-100 shadow-xl">
            <div className="card-body">
              <h1 className="card-title">Order Summary</h1>
              <p>Selected Items: {cart.length} </p>
              <p>Total Price: $ 454</p>
              <p>Total Shipping Charge: $ 4545</p>
              <p>Tax: $ 545</p>
              <h2>Grand Total: $ 155954</h2>

              <div>
                <button className="btn  btn-wide mt-5 bg-red-400 border-0	hover:bg-sky-700 text-black gap-6">
                  Clear Cart <Icon icon="ooui:clear" />
                </button>
                <button className="btn btn-wide bg-yellow-300 text-black hover:bg-sky-700 border-0 mt-5 gap-3">
                  Review Order <Icon icon="akar-icons:arrow-right" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
