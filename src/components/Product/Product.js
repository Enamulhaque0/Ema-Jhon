import React from "react";
import "./Product.css";
import { Icon } from '@iconify/react';

const Product = ({ product, handleAddToCart }) => {
  const { name, img, seller, price, ratings } = product;
  const url = `https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2F404-not-found&psig=AOvVaw3OK5GIo8xSSDcqoTGUBgs2&ust=1664259576179000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNCa2ZjosfoCFQAAAAAdAAAAABAO`;
  return (
    <div>
      <div className="card card-compact rounded-xl border  bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-70 h-64 rounded-xl mt-3"
            src={img}
            alt="Shoes"
            onError={(e) => {
              e.currentTarget.src =
                "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAH8AfwMBIgACEQEDEQH/xAAbAAEBAQEBAQEBAAAAAAAAAAAABQQDAgEHBv/EADYQAAEDAgIHBwIFBQEAAAAAAAEAAgMEERIxBRMUIUFUkhUyNVFhc4FS0SNxkaHBM0JDcuEi/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AP3FERARFwqqmOmYHSX37gBmUHdFP7UHKz9KdqDlZ+lBQRT+1Bys/Snag5WfpQUEU/tQcrP0p2oOVn6UFBFP7UHKz9KdqDjTTgf6oKCLnTzMqIhJGbtK6ICIiAiIgKfW79JUYO8byqCn1nidJ8oKCIiAiIgIiICIiCfojdtIGQlNlQU/ROdV7pVBAREQEREBT6zxOk+VQU+s8TpPlBQREQZ31tOyXVOkAflbyWhSajRT5alz2yNDHOub5hVQLCyD6iIgIiIJ+ic6r3SqCn6JzqvdKoICIiAiIgKfWeJ0nyqCn1nidJ8oKCIiAi8h7SSA4EjMA5LNX1rKRnnIe61BrRfzG1T67W612O981coK1lUz6ZB3m/yg1oiIJ+ic6r3SqCn6JzqvdKoICIiAiIgKfWeJ0nyqCn1nidJ8oKCnaTrxCDFEfxTmfp/6qBFwReywdkwF+Jz5Xb7m5G/9kEumkdTHaC43Nw1t+/8An6LhJI+V7nyOxOOZVt+iYJHFzny39CN37L52NT/XL+o+yCGvTJHxPD43YXDIq12NT/XL+o+ydjU/1y/qPsg7UFayqZbcJB3m/wArWsEWioYpA+OWUOGW8fZb0E/ROdV7pVBT9E51PulUEBERAREQFmrKUVIaQ8skYbtcOC0rHWVuzVETCBq3C7j5IOezaQ50dATZtIc6OgLptuFtU57RhhcALcV42qpjMTqiOMRyG3/km7ScroPmzaQ50dATZtIc6OgLRWTugYwtAOKQN3+q4vrjHXmBzQIwO9xva6Dzs2kOdHQE2bSHOjoC90Fa6oikkkaGhh4eS+0NY6oc9r2hptiZ6tQc9m0hzo6Amy153GtHQE2yokY6WCOMxAkAOJDnfkvVXWSQuha0Rt1gJJkNg1B3o6ZtLDgabkm7nHiV3XGlkfLGXPdE7fa8ZuF2QEREBERAWaem1tSx7rGMMc1zTxutKz10zoYbx/1HENYPUoM8Oj8EE8L33bIdx4gcF92WolMTaiSMxxkEYQbut5ryKyTUwSutuk1c27Jen1j2Gqk3auKzWC2bkHasgdOyMNIGGQON/RZ6ugfPJK8PaC7Dhvwtmvm1zChnc/CJ4TY7ty7U875KqWN1sLWNI3cSEHPYntgniY9oEhFj5DddemUOpqIpIXus0EOD3XuPRfK6skhmDYmgtYMUn5XsvNXVvjqWsZKyOMsxYnNxcUHx1BLgdCwwuhJJbjabsv5L3NRPIp9UWO1LcP4guDkvENZK8UuLCNY9wdYZgLppCpfA+FrJGxh97uc29rWQaKZkjIyJRGDf/GLBdlnopDLEXGVsu/vNaWrQgIiICIiAs1VSNqZYzIbxsvdvmVpRBhGjmNZPG11o5QLN+k+adngwxRPfdrX4n7u+VuRBgfo1v4oifgZIzCW5775r0aOVszpYagMLmgEFl8gtqIMI0cx7pH1DtY9/92Vty+NoZWGNzJwHsZguWXuLreiCeNHOa1mrms9ry/EWjM+i9vpJ3mJ7qkayMkh2DztwW1EHKBkrGkSyCQ33ENtZdURAREQf/9k=";
            }}
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
            className="p-3 absolute inset-x-0 bottom-0 flex justify-center items-center gap-3"
          >
            Add To Cart <Icon icon="bi:cart-plus-fill" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
