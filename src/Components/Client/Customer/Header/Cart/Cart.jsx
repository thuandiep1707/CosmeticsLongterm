import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { GlobalContext } from '../../../../../GlobalContext'

import './cart.scss'

export default () => {
    const globalContext = useContext(GlobalContext)
    return(
        <div className="main_cart">
            {
                globalContext.cart.map((product,index)=>{
                    return(
                        <Link to={`/shops/${product.category.name}/${product.id}`} 
                            key={index}
                            className="main_cart_product link" >
                            <img src={product.img} alt="" className="main_cart_product_img" />
                            <div className="main_cart_product_infor">
                                <p className="main_cart_product_infor_name">{product.category.name}-{product.name}</p>
                                <p className="main_cart_product_infor_price">Giá: {product.price}</p>
                                <p className="main_cart_product_infor_quantity">Số lượng: {product.quantity}</p>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}