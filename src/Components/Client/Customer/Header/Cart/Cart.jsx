import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { GlobalContext } from '../../../../../GlobalContext'

import './cart.scss'

export default () => {
    const navigate = useNavigate()
    const {cart, setCart} = useContext(GlobalContext)
    const handleRemoveItem = (product) => {
        setCart(
            cart.filter(item => item!=product )
        )
    }
    const handleGoToPay = () => {
        if (cart[0] == null) {
            return
        }
        return navigate("/customers/pay")
    }

    return(
        <div className="main_cart">
            <div className="main_cart_around">
                {
                    cart.map((product,index)=>{
                        return(
                            <div
                                key={index}
                                className="main_cart_around_product link" >
                                <img src={product.img} alt="" className="main_cart_around_product_img" />
                                <Link to={`/customers/shops/${product.category.name}/${product.id}`} className='link' >
                                    <div className="main_cart_around_product_infor">
                                        <p className="main_cart_around_product_infor_name">{product.category.name}-{product.name}</p>
                                        <p className="main_cart_around_product_infor_price">Giá: {product.price}</p>
                                        <p className="main_cart_around_product_infor_quantity">Số lượng: {product.quantity}</p>
                                    </div>
                                </Link>
                                <i class="fa-solid fa-x main_cart_around_product_del_btn"
                                    onClick={()=>{handleRemoveItem(product)}}/>
                            </div>
                        )
                    })
                }
            </div>
                <button className="main_cart_btn" onClick={()=>{setCart([])}}>Xóa hết</button>
                <button className="main_cart_btn" onClick={()=>{handleGoToPay()}}>Thanh toán</button>
        </div>
    )
}