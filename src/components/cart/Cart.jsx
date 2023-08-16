import {useContext} from 'react'
import {useNavigate} from 'react-router-dom'

import { GlobalContext } from "../../GlobalContext"
import "./cart.scss"

const Cart = ({handleShowCart}) => {
    const {cart,setCart} = useContext(GlobalContext)
    const handleChangeUrl = (value) => {
        console.log(value)
    }
    const handleClickDel = (product) => {
        const newCart = cart.filter((value)=>{return(value.id !== product.id)})
        setCart(newCart && null)
    }
    const handleClickDelAll = () => {
        setCart(null)
        handleShowCart()
    }
    const handleClickBuy = () => {
        handleShowCart()
    }
    if (!cart){
        return (
            <div className="cart">
                <div className="cart_name">
                    <p className="cart_name_cart">
                        <i className="fa-solid fa-cart-shopping"></i> 
                        Giỏ Hàng</p>
                    <i className="fa-solid fa-xmark" onClick={()=>handleShowCart()}></i>
                </div>
                <div className="cart_list null">Giỏ hàng trống</div>
            </div>
        )
    } else {
        return (
            <div className="cart">
                <div className="cart_name">
                    <p className="cart_name_cart">
                        <i className="fa-solid fa-cart-shopping cart_name_cart_icon"></i> 
                        Giỏ Hàng</p>
                    <i className="fa-solid fa-xmark pointer" onClick={()=>handleShowCart()}></i>
                </div>
                <div className="cart_list">
                    {cart.map((value, index) => {return(
                        <div className="cart_list_item" key={index}>
                            <img src={value.img} alt="" className="cart_list_item_img" onClick={()=>handleChangeUrl(value)}/>
                            <div className="cart_list_item_infor" onClick={()=>handleChangeUrl(value)}>
                                <div className="cart_list_item_infor_name">{value.name}</div>
                                <div className="cart_list_item_infor_price">Giá: {value.price}</div>
                                <div className="cart_list_item_infor_quantity">Số lượng: {value.quantity}</div>
                            </div>
                            <i className="fa-solid fa-xmark cart_list_item_del" onClick={()=>handleClickDel(value)}></i>
                        </div>
                    )})}
                </div>
                <div className="cart_btn">
                    <button className="cart_btn_del" onClick={()=>handleClickDelAll()}>XÓA HẾT</button>
                    <button className="cart_btn_buy"  onClick={()=>handleClickBuy()}>MUA NGAY</button>
                </div>
            </div>
        )
    }
}

export default Cart