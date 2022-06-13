import { StyledCard } from "../Styles/Card.styled";
import { Button } from "./../Styles/Button.Styled";

export default function Card({
  product: { description, image, title, id, price },
}) {
  return (
    <StyledCard layout={id % 2 === 0 && "row-reverse"}>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>
          <b>R$ {parseInt(price).toFixed(2).replace(".", ",")}</b>
        </p>
        <Button bg="#ccc888" color="#fff">
          Comprar
        </Button>
      </div>
      <div>
        <img src={image} alt={title} />
      </div>
    </StyledCard>
  );
}
