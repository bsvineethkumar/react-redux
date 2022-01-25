import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendCartData } from "./store/cart-actions";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Product from "./components/Shop/Product";
import { fetchCartData } from "./store/cart-actions";
import Notification from "./components/UI/Notification";

let isInitial = true;

function Arapp() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Product />
      </Layout>
    </Fragment>
  );
}

export default Arapp;
