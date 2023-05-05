import React from 'react';
import { Product, Products } from '../types/types';
import ProductView from '../product_view/product_view';
import { Grid } from '@mui/material';


const ListOfProducts = (props: Products) => {


    return (
        <Grid container spacing={2}>
            {props.products.map((each, index) => {
                return (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <ProductView 
                            category_code={each.category_code}
                            category_id={each.category_id}
                            sub_category_code={each.sub_category_code}
                            sub_category_id={each.sub_category_id}
                            brand={each.brand}
                            price={each.price}
                            recommended={props.recommended}
                            product_id={each.product_id}
                            />
                    </Grid>
                )
            })}
        </Grid>

    );
}

export default ListOfProducts;
