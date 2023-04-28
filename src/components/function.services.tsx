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
 } from "./list_of_products";

export const findProduct = (productID: number) => {

    const res1 = listOfProducts_1.find((product) => product.product_id === productID);
    if (res1){
        return res1;
    }

    const res2 = listOfProducts_2.find((product) => product.product_id === productID);
    if (res2){
        return res2;
    }

    const res3 = listOfProducts_3.find((product) => product.product_id === productID);
    if (res3){
        return res3;
    }

    const res4 = listOfProducts_4.find((product) => product.product_id === productID);
    if (res4){
        return res4;
    }

    const res5 = listOfProducts_5.find((product) => product.product_id === productID);
    if (res5){
        return res5;
    }

    const res6 = listOfProducts_6.find((product) => product.product_id === productID);
    if (res6){
        return res6;
    }

    const res7 = listOfProducts_7.find((product) => product.product_id === productID);
    if (res7){
        return res7;
    }

    const res8 = listOfProducts_8.find((product) => product.product_id === productID);
    if (res8){
        return res8;
    }

    const res9 = listOfProducts_9.find((product) => product.product_id === productID);
    if (res9){
        return res9;
    }

    const res10 = listOfProducts_10.find((product) => product.product_id === productID);
    if (res10){
        return res10;
    }

    const res11 = listOfProducts_11.find((product) => product.product_id === productID);
    if (res11){
        return res11;
    }

    const res12 = listOfProducts_12.find((product) => product.product_id === productID);
    if (res12){
        return res12;
    }

    const res13 = listOfProducts_13.find((product) => product.product_id === productID);
    if (res13){
        return res13;
    }

    const res14 = listOfProducts_14.find((product) => product.product_id === productID);
    if (res14){
        return res14;
    }

    return undefined;


}