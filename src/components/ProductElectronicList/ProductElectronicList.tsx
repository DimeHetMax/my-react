import type { Product } from "../../types/product";
import css from "./ProductElectronicList.module.css";

interface ProductElectronicListProps {
  products: Product[];
}

const ProductElectronicList = ({ products }: ProductElectronicListProps) => {
  return (
    <section className={css.section}>
      <h2 className={css.heading}>Products</h2>

      <ul className={css.list}>
        {products.map(({ id, title, category, description, price }) => (
          <li className={css.card} key={id}>
            <div className={css.content}>
              <p className={css.category}>{category}</p>
              <h3 className={css.title}>{title}</h3>
              <p className={css.description}>{description}</p>
              <p className={css.price}>${price.toFixed(2)}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProductElectronicList;
