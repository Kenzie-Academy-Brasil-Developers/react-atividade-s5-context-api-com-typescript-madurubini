interface CardProps {
  title: string;
  id: number;
  description: string;
  price: number;
  image: string;
}

const Card = ({ title, id, description, price, image }: CardProps) => {
  return (
    <li key={id}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <span>{price}</span>
    </li>
  );
};

export default Card;
