import { useParams } from "react-router-dom";

function ProductDetailPage() {
  const params = useParams();

  // params.productId;

  return (
    <>
      <h1>Product Details Page</h1>
      <p>Details about product with id: {params.productId}</p>
    </>
  );
}

export default ProductDetailPage;
