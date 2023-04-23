export type Product = {
    category_code: string,
    category_id?: number,
    sub_category_code: string,
    sub_category_id?: number,
    brand: string,
    product_id: number
    price: number
}

export type Products = {
    products: Array<Product>
}