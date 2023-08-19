import {useState, useEffect, useContext} from 'react'
import { useNavigate } from 'react-router-dom'

import { GlobalContext } from '../../GlobalContext'

import './checkout.scss'

const CheckOut = () => {
    const nav = useNavigate()
    const {cart, setCart} = useContext(GlobalContext)
    const handleClickDel = (product) => {
        const newCart = cart.filter((value)=>{return(value.id !== product.id)})
        if (newCart == false) {
            setCart(null)
            return
        } 
        setCart(newCart)
    }
    const handleCheckOut = () => {
        nav("/")
    }

    const [payment, setPayment] = useState("none")
    const handlePayMethods = (method) => {
        setPayment(method)
    }
    console.log("cart",cart)
    if (cart === null || cart === undefined) {
        return (
        <div className="check_out">Danh sách hiện không có sản phẩm nảo</div>
        )
    } else {
        return (
            <div className="check_out">
                <div className="check_out_cart_list">
                    {cart.map((value, index) => {return(
                        <div className="cart_list_item" key={index}>
                            <img src={value.img} alt="" className="check_out_cart_list_item_img" onClick={()=>handleChangeUrl(value)}/>
                            <div className="check_out_cart_list_item_infor" onClick={()=>handleChangeUrl(value)}>
                                <div className="check_out_cart_list_item_infor_name">{value.name}</div>
                                <div className="check_out_cart_list_item_infor_price">Giá: {value.price}</div>
                                <div className="check_out_cart_list_item_infor_quantity">Số lượng: {value.quantity}</div>
                            </div>
                            <i className="fa-solid fa-xmark check_out_cart_list_item_del" onClick={()=>handleClickDel(value)}></i>
                        </div>
                    )})}
                </div>
            </div>
        )
    }
}

export default CheckOut;