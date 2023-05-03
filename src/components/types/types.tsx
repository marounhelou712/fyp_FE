import { SvgIconTypeMap } from "@mui/material"
import { OverridableComponent } from "@mui/material/OverridableComponent"

export type Product = {
    category_code: string,
    category_id?: number,
    sub_category_code: string,
    sub_category_id?: number,
    brand: string,
    product_id: number,
    price: number,
    recommended?: boolean
}

export type Products = {
    products: Array<Product>,
    recommended?: boolean,
}