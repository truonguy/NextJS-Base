import React from "react";
import Link from "next/link";

const ProductList = () => {
  const productId = 100;
  return (
    <>
      <Link href="/">Home</Link>
      <h1>Product List</h1>
      <h2>
        <Link href="/products/1">product1</Link>
      </h2>
      <h2>
        <Link href="/products/2">product2</Link>
      </h2>
      <h2>
        <Link href="/products/3" replace>
          product3
        </Link>
      </h2>
      <h2>
        <Link href={`products/${productId}`}>product {productId}</Link>
      </h2>
    </>
  );
};

export default ProductList;
