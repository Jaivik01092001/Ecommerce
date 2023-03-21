// import React from "react";
// import Link from "next/link";
// import { AiOutlineShopping } from "react-icons/ai";
// import { Cart } from "./";
// import { useStateContext } from "../context/StateContext";
// import styles from "../styles/navbar.module.css";
// import { useAuth0 } from "@auth0/auth0-react";

// const Navbar = () => {
//   const { showCart, setShowCart, totalQuantities } = useStateContext();
//   const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

//   return (
//     <>
//       <div className="navbar-container">
//         <p className="logo">
//           <Link href="/">E-Mart</Link>
//         </p>

//         <div className={styles.center_menu}>
//           <span className={styles.leftrightmargin}>
//             <Link href="/">
//               <a>Home</a>
//             </Link>
//           </span>
//           <span className={styles.leftrightmargin}>
//             <Link href="/about">
//               <a>About</a>
//             </Link>
//           </span>
//           <span className={styles.leftrightmargin}>
//             <Link href="/contact">
//               <a>Contact</a>
//             </Link>
//           </span>

//           {isAuthenticated ? (
//             <span className={styles.leftrightmargin}>
//               <button
//                 className={styles.loginlogout}
//                 onClick={() => logout({ returnTo: window.location.origin })}
//               >
//                 Log Out
//               </button>
//             </span>
//           ) : (
//             <span className={styles.leftrightmargin}>
//               <button
//                 className={styles.loginlogout}
//                 onClick={() => loginWithRedirect()}
//               >
//                 Log In
//               </button>
//             </span>
//           )}
//         </div>
//         <button
//           type="button"
//           className="cart-icon"
//           onClick={() => setShowCart(true)}
//         >
//           <AiOutlineShopping />
//           <span className="cart-item-qty">{totalQuantities}</span>
//         </button>

//         {showCart && <Cart />}
//       </div>
//     </>
//   );
// };

// export default Navbar;

import React, { useRef, useState } from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { Cart } from "./";
import { useStateContext } from "../context/StateContext";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";

function MobileNav({open, setOpen}) {

    const { showCart, setShowCart, totalQuantities } = useStateContext();
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

    return (
        <div className={`z-10 absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-y-0" : "-translate-y-full"} transition-transform duration-300 ease-in-out filter  `}>
           
            <div className="flex flex-col justify-center items-center mt-28">
                <Link href="/">
                    <p className="text-2xl font-bold my-4 hover:text-red-500 cursor-pointer" > Home </p>
                </Link>
                <Link href="/about" >
                    <p className="text-2xl font-bold my-4 hover:text-red-500 cursor-pointer" href="#" > About Us </p>
                </Link>
                <Link href="/contact" >
                    <p className="text-2xl font-bold my-4 hover:text-red-500 cursor-pointer" href="#" > Contact </p>
                </Link>
                {/* <Link href="/products" >
                    <p className="text-2xl font-bold my-4 hover:text-red-500 cursor-pointer" href="#" > Products </p>
                </Link> */}
                {isAuthenticated ? (
                    <span className="leftrightmargin">
                        <button
                            className="loginlogout"
                            onClick={() => logout({ returnTo: window.location.origin })}
                        >
                            Log Out
                        </button>
                    </span>
                    ) : (
                    <span className="leftrightmargin">
                        <button
                            className="loginlogout"
                            onClick={() => loginWithRedirect()}
                        >
                            Log In
                        </button>
                    </span>
                )}
            </div>  
        </div>
    )
}

export default function Navbar() {

    const [open, setOpen] = useState(false);
    const navRef = useRef();
    const { showCart, setShowCart, totalQuantities } = useStateContext();
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

    return (
        <nav>
            <MobileNav open={open} setOpen={setOpen}/>
            
            <div className="NavbarItems w-11/12 flex justify-end items-center">

                <div>
                    <Link href="/" >
                        <div className="logo-container" >
                            <img src='../favicon.ico' width={50} height={50} />
                            <p className="logo-text" > E-Mart </p>
                        </div>
                    </Link>
                </div>

                <div>
                    <button type="button" className="cart-icon" onClick={() => setShowCart(true)} >
                        <AiOutlineShopping />
                        <span className="cart-item-qty">{totalQuantities}</span>
                    </button>
                    {showCart && <Cart />}
                </div>

                <div className="group z-50 relative w-6 h-6 cursor-pointer flex-col justify-between items-center flex" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    
                        <span className={`h-1 w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-2.5" : ""}`} />
                        <span className={`h-1 w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transition-all duration-300 ease-in-out ${open ?  "w-0" : "w-full" }`} />
                        <span className={`h-1 w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-2.5" : ""}`} />

                </div>
            </div>
        </nav>
    )
}

