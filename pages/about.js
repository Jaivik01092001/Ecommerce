import React from "react";
import styles from "../styles/about.module.css";
import Link from "next/link";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import Marquee from "react-fast-marquee";

const Contact = () => {
  return (
    <>
      <h2 className={styles.common}>About page</h2>
      <div className={styles.aboutcontainer}>
        <div className={styles.herosectiondata}>
          <p className={styles.introdata}>Welcome to </p>
          {/* <h1> {name} </h1> */}
          <h1 className={styles.emarttitle}>E-Mart Store</h1>
          <p className={styles.emartpara}>
            Our ecommerce website offers a seamless shopping experience with a{" "}
            wide selection of high-quality products at competitive prices. From
            fashion to home goods, our user-friendly platform makes it easy to
            find and purchase what you need. With secure payment options and
            fast shipping, shopping has never been easier.
          </p>
          <Link href="/">
            <a className={styles.shop}>Shop Now</a>
          </Link>
        </div>

        <div className={styles.herosectionimage}>
          <figure>
            <div className={styles.figureContent}>
              {/* add your figure content here */}

              <img
                className={styles.imgstyle}
                src="https://www.kindpng.com/picc/m/762-7626064_e-commerce-websites-ecommerce-png-transparent-png.png"
                alt="hero-section-photo"
                style={{ borderRadius: "1rem" }}
              />
            </div>
          </figure>
        </div>
      </div>

      {/* Service Section */}

      <div className={styles.container}>
        <div className={`${styles.grid} ${styles.gridthreecolumn}`}>
          <div className={styles.services1}>
            <div className={styles.slverbg}>
              <TbTruckDelivery className={styles.icon} />
              <h3 className={styles.h3title}>Super Fast and Free Delivery</h3>
            </div>
          </div>

          <div className={styles.services2}>
            <div className={styles.servicescolum2}>
              <div>
                <MdSecurity className={styles.icon} />
                <h3 className={styles.h3title}>Non-contact Shipping</h3>
              </div>
            </div>
            <div className={styles.servicescolum2}>
              <div>
                <GiReceiveMoney className={styles.icon} />
                <h3 className={styles.h3title}>Money-back Guaranteed</h3>
              </div>
            </div>
          </div>

          <div className={styles.services3}>
            <div className={styles.slverbg}>
              <RiSecurePaymentLine className={styles.icon} />
              <h3 className={styles.h3title}>Super Secure Payment System</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Partners Section */}

      {/* <div className={styles.containertrusted}>
        <h3 className={styles.trustedh3}>Trusted By 100+ Companies</h3>

        <Marquee number="20" className={styles.mar}>
          <div className={styles.brandsectionslider}>
            <div className={`${styles.slide} ${styles.mlr}`}>
              <img
                className={styles.trustedimage}
                src="https://hindubabynames.info/downloads/wp-content/themes/hbn_download/download/e-commerce-companies/amazon-logo.png"
                alt="Amazon"
              />
            </div>
            <div className={`${styles.slide} ${styles.mlr}`}>
              <img
                className={styles.trustedimage}
                src="https://hindubabynames.info/downloads/wp-content/themes/hbn_download/download/e-commerce-companies/flipkart-logo.png"
                alt="Flipkart"
              />
            </div>
            <div className={`${styles.slide} ${styles.mlr}`}>
              <img
                className={styles.trustedimage}
                src="https://hindubabynames.info/downloads/wp-content/themes/hbn_download/download/e-commerce-companies/myntra-logo.png"
                alt="Myntra"
              />
            </div>
            <div className={`${styles.slide} ${styles.mlr}`}>
              <img
                className={styles.trustedimage}
                src="https://hindubabynames.info/downloads/wp-content/themes/hbn_download/download/e-commerce-companies/firstcry-logo.png"
                alt="First Cry"
              />
            </div>
            <div className={`${styles.slide} ${styles.mlr}`}>
              <img
                className={styles.trustedimage}
                src="https://hindubabynames.info/downloads/wp-content/themes/hbn_download/download/e-commerce-companies/ola-logo.png"
                alt="Ola"
              />
            </div>
            <div className={`${styles.slide} ${styles.mlr}`}>
              <img
                className={styles.trustedimage}
                src="https://hindubabynames.info/downloads/wp-content/themes/hbn_download/download/e-commerce-companies/shopclues-bazar-logo.png"
                alt="Shopclues"
              />
            </div>
            <div className={`${styles.slide} ${styles.mlr}`}>
              <img
                className={styles.trustedimage}
                src="https://hindubabynames.info/downloads/wp-content/themes/hbn_download/download/e-commerce-companies/croma-logo.png"
                alt="Croma"
              />
            </div>
            <div className={`${styles.slide} ${styles.mlr}`}>
              <img
                className={styles.trustedimage}
                src="https://hindubabynames.info/downloads/wp-content/themes/hbn_download/download/e-commerce-companies/bookmyshow-logo.png"
                alt="Book My Show"
              />
            </div>
          </div>
        </Marquee>
      </div> */}
    </>
  );
};

export default Contact;
