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

    const combinedProducts = [
        ...listOfProducts_1, 
        ...listOfProducts_2, 
        ...listOfProducts_3, 
        ...listOfProducts_4,
        ...listOfProducts_5, 
        ...listOfProducts_6, 
        ...listOfProducts_7, 
        ...listOfProducts_8,
        ...listOfProducts_9, 
        ...listOfProducts_10, 
        ...listOfProducts_11, 
        ...listOfProducts_12,
        ...listOfProducts_13,
        ...listOfProducts_14
    ]

    const res = combinedProducts.find((product) => product.product_id === productID);
    if (res){
        return res;
    }

    return undefined;
}