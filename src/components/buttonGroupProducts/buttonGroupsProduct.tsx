import React from 'react';
import { 
    listOfProducts_1,
    listOfProducts_2,
    listOfProducts_3,
    listOfProducts_4,
    listOfProducts_5,
    listOfProducts_6,
    listOfProducts_7,
    listOfProducts_8,
    listOfProducts_9,
    listOfProducts_10,
    listOfProducts_11,
    listOfProducts_12,
    listOfProducts_13,
    listOfProducts_14,
 } from '../../components/list_of_products';
 import {   Button, 
            Grid,
            ButtonGroup 
        } from '@mui/material';

import ListOfProducts from '../../components/recommendation/listOfProducts';
import { Product } from '../../components/types/types';
import CircularProgress from '@mui/material/CircularProgress';



const GroupButton = (props: {recommendedProducts: Array<Product>}) => {

    const [category, setCategory] = React.useState<Array<Product>>(listOfProducts_14)
    const [isLoading, setIsLoading] = React.useState<boolean>(false)

    const [token, setToken] = React.useState();

    // React.useEffect(() => {
    //     console.log(category);
    // }, [category])

    const handleClick = (e: Array<Product>) => {
        setIsLoading(true);
        setCategory(e);
    }

    async function handleAPICALL()  {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json; charset=utf-8', 
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Authorization': 'Bearer ' + token 
        }}
        fetch("http://localhost:8080/api/clients", requestOptions)
        .then(response => response.json())
        .then(data => console.log(data))
    }

    async function handleLOGIN() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=utf-8', 
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000'
        },
            body: JSON.stringify({
                "username": "admin",
                "password": "admin"
              })
        };

        fetch('http://localhost:8080/api/authenticate', requestOptions)
        .then(response => response.json())
        .then(data => {setToken(data.id_token);
        console.log(data.id_token)});
    }

    React.useEffect(() => {
        if (isLoading){
            setIsLoading(false);
        }
    }, [isLoading])


    return (
        <Grid container>
            <Grid item xs={2}>
                <ButtonGroup
                    orientation="vertical"
                    aria-label="vertical contained button group"
                    variant="text"
                    >
                    <Button onClick={handleLOGIN}> LOGIN </Button>
                    <Button onClick={handleAPICALL}> test API </Button>
                    <Button onClick={(e) => handleClick(props.recommendedProducts)}> Recommended Products</Button>
                    <Button onClick={(e) => handleClick(listOfProducts_1)}> {listOfProducts_1[0].category_code} </Button>
                    <Button onClick={(e) => handleClick(listOfProducts_2)}> {listOfProducts_2[0].category_code} </Button>
                    <Button onClick={(e) => handleClick(listOfProducts_3)}> {listOfProducts_3[0].category_code} </Button>
                    <Button onClick={(e) => handleClick(listOfProducts_4)}> {listOfProducts_4[0].category_code} </Button>
                    <Button onClick={(e) => handleClick(listOfProducts_5)}> {listOfProducts_5[0].category_code} </Button>
                    <Button onClick={(e) => handleClick(listOfProducts_6)}> {listOfProducts_6[0].category_code} </Button>
                    <Button onClick={(e) => handleClick(listOfProducts_7)}> {listOfProducts_7[0].category_code} </Button>
                    <Button onClick={(e) => handleClick(listOfProducts_8)}> {listOfProducts_8[0].category_code} </Button>
                    <Button onClick={(e) => handleClick(listOfProducts_9)}> {listOfProducts_9[0].category_code} </Button>
                    <Button onClick={(e) => handleClick(listOfProducts_10)}> {listOfProducts_10[0].category_code} </Button>
                    <Button onClick={(e) => handleClick(listOfProducts_11)}> {listOfProducts_11[0].category_code} </Button>
                    <Button onClick={(e) => handleClick(listOfProducts_12)}> {listOfProducts_12[0].category_code} </Button>
                    <Button onClick={(e) => handleClick(listOfProducts_13)}> {listOfProducts_13[0].category_code} </Button>
                    <Button onClick={(e) => handleClick(listOfProducts_14)}> {listOfProducts_14[0].category_code} </Button>

                </ButtonGroup>
            </Grid>
            
            <Grid item xs={10}>
                {   
                    isLoading ? 
                    <CircularProgress/> :
                    <ListOfProducts products={category}/>
                }
            </Grid>
        </Grid>

    )
}

export default GroupButton;
