import products from "../../products";
import Card from "../Card";
import { useState } from "react";
import { useCart } from "../../Providers/Cart";
const List = () => {
  const { addProduct, deleteProduct, cart } = useCart();
  const [isRemovable, setIsRemovable] = useState(false);

  return (
    <>
      {products.map((product) => (
        <>
          <Card
            title={product.title}
            id={product.id}
            description={product.description}
            price={product.price}
            image={product.image}
          />
          <button
            onClick={() => {
              addProduct(product);
            }}
          >
            add to cart
          </button>
        </>
      ))}
      {cart.map((item, index) => (
        <>
          <Card
            title={item.title}
            id={item.id}
            description={item.description}
            price={item.price}
            image={item.image}
          />
          <button
            onClick={() => {
              deleteProduct(index);
            }}
          >
            remove from cart
          </button>
        </>
      ))}
    </>
  );
};

export default List;
