import { useCart } from "../../Providers/Cart";
import { BoxImg, StyledCard } from "./styles";

interface CardProps {
  title: string;
  id: number;
  price: number;
  image: string;
  index?: any;
  product?: any;
  isRemovable: boolean;
}

const Card = ({
  title,
  id,
  price,
  image,
  index,
  product,
  isRemovable,
}: CardProps) => {
  const { addProduct, deleteProduct } = useCart();

  return (
    <StyledCard key={id}>
      <BoxImg>
        <img src={image} alt={title} />
      </BoxImg>
      <h3>{title}</h3>
      <span>R$ {price}</span>
      {isRemovable ? (
        <button
          onClick={() => {
            deleteProduct(index);
          }}
        >
          remove from cart
        </button>
      ) : (
        <button
          onClick={() => {
            addProduct(product);
          }}
        >
          add to cart
        </button>
      )}
    </StyledCard>
  );
};

export default Card;
