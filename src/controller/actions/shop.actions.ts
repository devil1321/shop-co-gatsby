import { ShopTypes } from "../types";

interface HANDLE_SET_PRODUCTS{
    type:ShopTypes.HANDLE_SET_PRODUCTS,
    products:any;
}

interface HANDLE_ADD_TO_CART{
    type:ShopTypes.HANDLE_ADD_TO_CART;
    cart:any;
}
interface HANDLE_REMOVE_FROM_CART{
    type:ShopTypes.HANDLE_REMOVE_FROM_CART;
    cart:any;
}
interface HANDLE_CHANGE_CART_QUANTITY{
    type:ShopTypes.HANDLE_CHANGE_CART_QUANTITY;
    cart:any;
}
interface HANDLE_CLEAR_CART{
    type:ShopTypes.HANDLE_CLEAR_CART;
    cart:any;
    summary:number;
}
interface HANDLE_SUMMARY{
    type:ShopTypes.HANDLE_SUMMARY;
    summary:number;
}

export type Action = HANDLE_SET_PRODUCTS | HANDLE_ADD_TO_CART | HANDLE_REMOVE_FROM_CART | HANDLE_CHANGE_CART_QUANTITY | HANDLE_CLEAR_CART | HANDLE_SUMMARY 