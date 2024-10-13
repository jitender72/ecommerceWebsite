import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "./context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollections = () => {
  const products = useContext(ShopContext);
  console.log("test in latestcollection", products);

  const [LatestProducts, setLatestProducts] = useState([]);
  console.log("latestproduct here:", LatestProducts);
  console.log("latest with products ", LatestProducts.products);

  useEffect(() => {
    // console.log(typeof products);
    // if (products && typeof products === "object") {
    //   // console.log("product inside ifelse : ", products);
    //   // console.log("type check inside condition :", typeof products);
    // setLatestProducts(products);
    //   // const productArray = Object.values(products); //convert to array
    //   // setLatestProducts(productArray);
    //   // console.log("productarray:", productArray);
    //   // setLatestProducts(productArray.slice(0, 10));
    // }
  }, []);
  // console.log(products);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"Latest"} text2={"Collection"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, est?
        </p>
      </div>

      {/* rendering products */}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {LatestProducts.map((item, index) => {
          return (
            <ProductItem
              key={index}
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LatestCollections;
