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
            ButtonGroup, 
            Divider,
            Avatar,
            IconButton
        } from '@mui/material';

import ListOfProducts from '../../components/recommendation/listOfProducts';
import { Product } from '../../components/types/types';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import { findProduct } from '../function.services';



const GroupButton = (props: {recommendedProducts?: Array<Product>}) => {

    const [category, setCategory] = React.useState<Array<Product>>(listOfProducts_14);
    const [activeButton, setActiveButton] = React.useState<number>(14);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [inRecommendedSection, setInRecommendedSection] = React.useState<boolean>(false);

    const [recuRecommendation, setRecuRecommendation] = React.useState<Array<number>>([]);

    React.useEffect(() => {
        if (activeButton === 0) {
            setInRecommendedSection(true);
        } else {
            setInRecommendedSection(false);
        }
    }, [activeButton])

    const [recommendedProducts, setRecommendedProducts] = React.useState<{
        "category_code": string,
        "category_id": number,
        "sub_category_code": string,
        "sub_category_id": number,
        "brand": string,
        "product_id": number,
        "price": number
      }[]>([]);


    const [token, setToken] = React.useState();
    let navigate = useNavigate();

    const accessToken = localStorage.getItem('access_token');


    React.useEffect(() => {
        if (recuRecommendation.length > 0) {
        setRecommendedProducts((prev) => {
            const newArr: Array<{
                "category_code": string,
                "category_id": number,
                "sub_category_code": string,
                "sub_category_id": number,
                "brand": string,
                "product_id": number,
                "price": number
              }> = []; 

            recuRecommendation.forEach(element => {
                const res = findProduct(element);
                newArr.push(res);
            });

            return newArr;
        })
    }
    }, [recuRecommendation])

    const handleClick = (e: Array<Product>, index: number) => {
        setIsLoading(true);
        setCategory(e);
        setActiveButton(index);
    }

    async function handleRecommendation() {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json; charset=utf-8', 
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Authorization': 'Bearer ' + accessToken,
        }}

        fetch("http://localhost:8080/api/recommendation", requestOptions)
        .then(response => response.json())
        .then(data => setRecuRecommendation(data))
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

    async function handleAccount() {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json; charset=utf-8', 
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Authorization': 'Bearer ' + accessToken,
        }
        };

        fetch('http://localhost:8080/api/account', requestOptions)
        .then(response => response.json())
        .then(data => {
                            console.log(data)
                        });
    }

    React.useEffect(() => {
        if (isLoading){
            setIsLoading(false);
        }
    }, [isLoading])

    const handleLogout = () =>{
        navigate('/');
        localStorage.clear();
    }

    const testFunction = () => {
        console.log(findProduct(1))
    }


    return (

        <div 
            style={{backgroundColor: '#00000f', height: '100%'}}
        >
            <div 
            style={{backgroundColor: '#a9a0a0'}}
            >
                <div style={{ paddingLeft: '95%'}}>
                <IconButton sx={{color:'#b8860b' }}>
                    <LogoutIcon onClick={handleLogout}/>
                </IconButton>
                </div>
            </div>
            <Divider sx={{marginBottom: '1rem'}}/>
            <Grid container>
                <Grid item xs={2}>
                    <ButtonGroup
                        orientation="vertical"
                        aria-label="vertical contained button group"
                        variant="text"
                        sx={{position: 'fixed', width: '15%'}} 
                    >
                        <Button sx={{color: '#b8860b'}} onClick={handleAccount}> ACCOUNT </Button>
                        <Button sx={{color: '#b8860b'}} onClick={handleRecommendation}> Generate Recommendation </Button>
 
                        <Button  sx={{color: activeButton === 0 ? 'red' : '#b8860b'}}
                        onClick={(e) => handleClick(recommendedProducts, 0)}
                        >Recommended Products</Button>


                        <Button sx={{color: activeButton === 1 ? 'red' : '#b8860b'}} onClick={(e) => handleClick(listOfProducts_1, 1)}> {listOfProducts_1[0].category_code} </Button>
                        <Button sx={{color: activeButton === 2 ? 'red' : '#b8860b'}} onClick={(e) => handleClick(listOfProducts_2, 2)}> {listOfProducts_2[0].category_code} </Button>
                        <Button sx={{color: activeButton === 3 ? 'red' : '#b8860b'}} onClick={(e) => handleClick(listOfProducts_3, 3)}> {listOfProducts_3[0].category_code} </Button>
                        <Button sx={{color: activeButton === 4 ? 'red' : '#b8860b'}} onClick={(e) => handleClick(listOfProducts_4, 4)}> {listOfProducts_4[0].category_code} </Button>
                        <Button sx={{color: activeButton === 5 ? 'red' : '#b8860b'}} onClick={(e) => handleClick(listOfProducts_5, 5)}> {listOfProducts_5[0].category_code} </Button>
                        <Button sx={{color: activeButton === 6 ? 'red' : '#b8860b'}} onClick={(e) => handleClick(listOfProducts_6, 6)}> {listOfProducts_6[0].category_code} </Button>
                        <Button sx={{color: activeButton === 7 ? 'red' : '#b8860b'}} onClick={(e) => handleClick(listOfProducts_7, 7)}> {listOfProducts_7[0].category_code} </Button>
                        <Button sx={{color: activeButton === 8 ? 'red' : '#b8860b'}} onClick={(e) => handleClick(listOfProducts_8, 8)}> {listOfProducts_8[0].category_code} </Button>
                        <Button sx={{color: activeButton === 9 ? 'red' : '#b8860b'}} onClick={(e) => handleClick(listOfProducts_9, 9)}> {listOfProducts_9[0].category_code} </Button>
                        <Button sx={{color: activeButton === 10 ? 'red' : '#b8860b'}} onClick={(e) => handleClick(listOfProducts_10, 10)}> {listOfProducts_10[0].category_code} </Button>
                        <Button sx={{color: activeButton === 11 ? 'red' : '#b8860b'}} onClick={(e) => handleClick(listOfProducts_11, 11)}> {listOfProducts_11[0].category_code} </Button>
                        <Button sx={{color: activeButton === 12 ? 'red' : '#b8860b'}} onClick={(e) => handleClick(listOfProducts_12, 12)}> {listOfProducts_12[0].category_code} </Button>
                        <Button sx={{color: activeButton === 13 ? 'red' : '#b8860b'}} onClick={(e) => handleClick(listOfProducts_13, 13)}> {listOfProducts_13[0].category_code} </Button>
                        <Button sx={{color: activeButton === 14 ? 'red' : '#b8860b'}} onClick={(e) => handleClick(listOfProducts_14, 14)}> {listOfProducts_14[0].category_code} </Button>

                    </ButtonGroup>
                </Grid>
            
                <Grid item xs={10}>                        
                    <ListOfProducts products={category} recommended={inRecommendedSection}/>
                </Grid>
            </Grid>
        </div>


    )
}

export default GroupButton;
