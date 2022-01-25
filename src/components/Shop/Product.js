import ProductItem from "./ProductItem";
import classes from "./Product.module.css";

const DUMMY_Product = [
  {
    id: "p1",
    price: 6,
    title: "My First Book",
    description: "the first book i ever wrote",
  },
  {
    id: "p2",
    price: 4,
    title: "My Second Book",
    description: "the second book i ever wrote",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_Product.map((product) => (
          <ProductItem
            key={product.id}
            id= {product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
