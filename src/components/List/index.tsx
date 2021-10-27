import products from "../../products";
import Card from "../Card";
import { useCart } from "../../Providers/Cart";
import { useState } from "react";
import { StyledList } from "./styles";
const List = () => {
  const { cart } = useCart();

  const [isRemovable, setIsRemovable] = useState(false);

  return (
    <>
      <StyledList>
        {products.map((product) => (
          <>
            <Card
              title={product.title}
              id={product.id}
              price={product.price}
              image={product.image}
              product={product}
              isRemovable={false}
            ></Card>
          </>
        ))}
      </StyledList>
      <StyledList>
        {cart.map((item, index) => (
          <>
            <Card
              title={item.title}
              id={item.id}
              price={item.price}
              image={item.image}
              index={index}
              isRemovable={true}
            />
          </>
        ))}
      </StyledList>
    </>
  );
};

export default List;
