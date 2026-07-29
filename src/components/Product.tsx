interface ProductProps {
  name: string;
  imgUrl: string;
  price: number;
};
const Product = ({name, imgUrl, price}:ProductProps) => {
  return (
    <li>
      <img src={imgUrl} alt="picture" />
      <h2>{name}</h2>
      <p>{price}</p>
    </li>
  );
};
export default Product;
