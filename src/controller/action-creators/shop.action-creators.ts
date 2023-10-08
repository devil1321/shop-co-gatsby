import { ShopTypes } from '../types'
// @ts-ignore
import { products } from '../../products-context'
import { Dispatch } from 'redux'
import store from '../store'

export const handleSetProducts = () => (dispatch:Dispatch) => {
    dispatch({
        type:ShopTypes.HANDLE_SET_PRODUCTS,
        products:products
    })
}
export const handleSetCart = () => (dispatch:Dispatch) => {
    dispatch({
        type:ShopTypes.HANDLE_SET_CART,
        cart:products
    })
}
export const handleAddToCart = (id:number,cart:any,products:any) => (dispatch:Dispatch) => {
    let tmpCart = cart
    const item = products.find((p:any) => p.id === id)
    if(item){
        item.inCart = true
        item.quantity = 1
    }
    tmpCart.push(item)
    dispatch({
        type:ShopTypes.HANDLE_ADD_TO_CART,
        cart:tmpCart
    })
}
export const handleRemoveFromCart = (id:number,cart:any,products:any) => (dispatch:Dispatch) => {
    let tmpCart = cart
    tmpCart = tmpCart.filter((item:any) => item.id !== id)
    const item = products.find((i:any)=> i.id === id)
    if(item){
        item.inCart = false
        item.quantity = 0
    }
    dispatch({
        type:ShopTypes.HANDLE_REMOVE_FROM_CART,
        cart:tmpCart
    })
}
export const handleChangeCartQuantity = (id:number,quantity:number,cart:any,products:any) => (dispatch:Dispatch) => {
    let tmpCart = cart
    const item = products.find((item:any) => item.id === id)
    if(item){
        item.quantity = quantity
        if(quantity < 1){
            cart = cart.filter((p:any) => p.id !== id)
            item.inCart = false
        }
        if(item.quantity > 0 && !item.inCart){
            cart = [...cart,item]
            item.inCart = true
        }
        tmpCart = products
        dispatch({
            type:ShopTypes.HANDLE_CHANGE_CART_QUANTITY,
            cart:tmpCart
        })
    }
}
export const handleSummary = (cart:any) => (dispatch:Dispatch) => {
    let summary = 0
    cart.forEach((i:any) => {
        const innerSummary = i.quantity * i.price
        summary += innerSummary
    })
    if(summary < 0){
        summary = 0
    }
    dispatch({
        type:ShopTypes.HANDLE_SUMMARY,
        summary:summary
    })
}


