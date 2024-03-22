"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    console.log("Placing your order");
    router.push("/");
  };
  return (
    <>
      <h1>OrderProduct</h1>
      <button onClick={handleClick}>Place order</button>
    </>
  );
}
