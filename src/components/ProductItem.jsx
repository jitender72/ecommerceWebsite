import React, { useContext } from "react";
import { ShopContext } from "./context/ShopContext";
import { Link } from "react-router-dom";
// import { products } from "../assets/frontend_assets/assets";

const ProductItem = ({ id, image, name, price }) => {
  const currency = useContext(ShopContext);

  // console.log("type of currency data : ", typeof currency);
  // console.log("object data here:", currency);

  //   const products = useContext(ShopContext);

  //   console.log("products logs: ", products);
  //   const currencySymbol = currency.currency;    //curreny symbol here
  return (
    <Link className="text-gray-700 cursor-pointer" to={`/products/${id}`}>
      <div className="overflow-hidden">
        <img
          className="hover:scale-110 transition ease-in-out"
          src={image[0]}
          alt=""
        />
        <p className="pt-3 pb-1 text-sm">{name}</p>
        <p className="text-sm font-medium">
          {currency}
          {price}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;
