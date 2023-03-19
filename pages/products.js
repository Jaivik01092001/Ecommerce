// import React from 'react';
// import styles from '../styles/contact.module.css'
// import { client } from '../lib/client';
// import { Product } from '../components';

// const products = ({ products}) => (
//   <>
//   <h2 className={styles.common}>Product page</h2>
//     <div className="products-container">
//       {products?.map((allProducts) => <Product key={allProducts._id} product={allProducts} />)}
//     </div>
//   </>
// );

// export const getServerSideProps = async () => {
//   const query = '*[_type == "allProducts"]';
//   const products = await client.fetch(query);
//   return {
//     props: { products}
//   }
// }

// export default products;

import React from 'react';
import styles from '../styles/contact.module.css'
import { client } from '../lib/client';
import { Product } from '../components';

const products = ({ products}) => (
  <>
  <h2 className={styles.common}>Product page</h2>
    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>
  </>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  return {
    props: { products }
  }
}

export default products;