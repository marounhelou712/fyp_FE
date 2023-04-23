import React from 'react';
import LogIn from './components/login/login';
import { Card, Divider } from '@mui/material';
import ProductView from './components/product_view/product_view';

import styles from './App.module.css'
import ListOfProducts from './components/recommendation/listOfProducts';

import { listOfProducts_14 } from './components/list_of_products';
import GroupButton from './components/buttonGroupProducts/buttonGroupsProduct';

const  App = () => {
  return (
    <div className={styles.mainDiv}>
      {/* <Card sx={{ minWidth: 275, minHeight: 300, margin: '5rem', maxWidth: 600, maxHeight: 700}}> */}
        {/* <LogIn/> */}
        {/* <ProductView 
          category_code='test1'
          sub_category_code='test22'
          brand='vin'
          price={55}
        /> */}
        {/* <ListOfProducts 
          products={[
            {
              "category_code": "accessories",
              "category_id": 1,
              "sub_category_code": "accessories.bag",
              "sub_category_id": 38,
              "brand": "continent",
              "product_id": 7312,
              "price": 19.87
            },
            {
              "category_code": "accessories",
              "category_id": 1,
              "sub_category_code": "accessories.bag",
              "sub_category_id": 38,
              "brand": "continent",
              "product_id": 7314,
              "price": 21.92
            },
            {
              "category_code": "accessories",
              "category_id": 1,
              "sub_category_code": "accessories.bag",
              "sub_category_id": 38,
              "brand": "continent",
              "product_id": 67280,
              "price": 34.62
            }]}

        /> */}
      {/* </Card> */}
      
      {/* <Divider/> */}
      <GroupButton recommendedProducts={[{
              category_code: "accessories",
              category_id: 1,
              sub_category_code: "accessories.bag",
              sub_category_id: 38,
              brand: "continent",
              product_id: 67280,
              price: 34.62
            }, {
              category_code: "accessories",
              category_id: 1,
              sub_category_code: "accessories.bag",
              sub_category_id: 38,
              brand: "continent",
              product_id: 67280,
              price: 34.62
            }]}/>

            {/* <LogIn/> */}
    </div>
  );
}

export default App;
