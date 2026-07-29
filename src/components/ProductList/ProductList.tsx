import "./ProductList.module.css";
import Product from "../Product";
const ProductList = () => {
  return (
    <ul>
      <Product name="Tacos With Lime"  imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=640"    price={10.99}/>
      <Product name="Fries and Burger" imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=640"    price={10.99}/>
      <Product name="Macos" imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=640"    price={110.99}/>
      <Product name="Suckos" imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=640"    price={120.99}/>
    </ul>
  );
};

export default ProductList;
