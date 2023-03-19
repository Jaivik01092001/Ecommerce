import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { Cart } from "./";
import { useStateContext } from "../context/StateContext";
import styles from "../styles/navbar.module.css";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <>
      <div className="navbar-container">
        <p className="logo">
          <Link href="/">E-Mart</Link>
        </p>

        <div className={styles.center_menu}>
          <span className={styles.leftrightmargin}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </span>
          <span className={styles.leftrightmargin}>
            <Link href="/about">
              <a>About</a>
            </Link>
          </span>
          <span className={styles.leftrightmargin}>
            <Link href="products">
              <a>Product</a>
            </Link>
          </span>
          <span className={styles.leftrightmargin}>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </span>

          {isAuthenticated ? (
            <span className={styles.leftrightmargin}>
              <button
                className={styles.loginlogout}
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Log Out
              </button>
            </span>
          ) : (
            <span className={styles.leftrightmargin}>
              <button
                className={styles.loginlogout}
                onClick={() => loginWithRedirect()}
              >
                Log In
              </button>
            </span>
          )}
        </div>
        <button
          type="button"
          className="cart-icon"
          onClick={() => setShowCart(true)}
        >
          <AiOutlineShopping />
          <span className="cart-item-qty">{totalQuantities}</span>
        </button>

        {showCart && <Cart />}
        {/* <div className={styles.userinfo}>
          <span className={styles.userpic}>
            {isAuthenticated && <img className={styles.userpic} src={user.picture} />}
          </span>
          <span className={styles.username}>
            {isAuthenticated && <p>{user.name}</p>}
          </span>
        </div> */}
      </div>
    </>
  );
};

export default Navbar;
