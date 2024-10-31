import { Metadata } from "next";
import React from "react";

interface Props {
  params: { slug: string[] };
  searchParams: { sortOrder: string };
}

const ProductPage = ({ params: { slug }, searchParams: {sortOrder} }: Props) => {
  return <div>ProductPage: {slug} {sortOrder}</div>;
};


export async function generateMetadata(): Promise<Metadata> {
  const product = await fetch(''); // fetch product data
  return {
    title: product.title,
    description: product.description,
    keywords: product.keywords,
  };
}

export default ProductPage;
