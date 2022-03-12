import React from 'react';
import Layout from '../components/layout';

function PageNotFound() {
  return ( 
    <Layout>
      <main className='page-not-found-content'>
        <h1>404</h1>
        <h2>Oops! I can't find what your looking for.</h2>
      </main>
    </Layout>
   );
}

export default PageNotFound;