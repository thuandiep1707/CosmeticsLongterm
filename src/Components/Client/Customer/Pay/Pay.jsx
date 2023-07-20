import {useEffect, useContext, useState} from 'react'
import {Link} from 'react-router-dom'

import { GlobalContext } from '../../../../GlobalContext'

import "./pay.scss"

const Pay = () => {
    useEffect(
        ()=>{
            window.scrollTo({top:0, left:0, behavior:"smooth"})})
    const {cart, username} = useContext(GlobalContext)
    const [sumPrice, setsumPrice] = useState(0)
    // useEffect(()=>{
    //     cart.map(product => {setsumPrice(Number(product.price)*Number(product.quantity)*Number(sumPrice)); console.log(product.quantity)})
    //     await console.log(sumPrice)
    // },[])
    const submit = ()=>{
        console.log("âs")
    }
    return (
        <div className="pay">
            <div className="pay_cart">
            {
                    cart.map((product,index)=>{
                        return(
                            <div
                                key={index}
                                className="pay_cart_around_product link" >
                                <img src={product.img} alt="" className="pay_cart_around_product_img" />
                                <Link to={`/customers/shops/${product.category.name}/${product.id}`} className='link' >
                                    <div className="pay_cart_around_product_infor">
                                        <p className="pay_cart_around_product_infor_name">{product.category.name}-{product.name}</p>
                                        <p className="pay_cart_around_product_infor_price">Giá: {product.price}</p>
                                        <p className="pay_cart_around_product_infor_quantity">Số lượng: {product.quantity}</p>
                                    </div>
                                </Link>
                                <i className="fa-solid fa-x pay_cart_around_product_del_btn"
                                    onClick={()=>{handleRemoveItem(product)}}/>
                            </div>
                        )
                    })
                }
            </div>
            <div className="pay_submit" onSubmit={(e)=>{e.preventDefault();submit()}}>
                <div className="pay_submit_select">
                    <select name="" id="" className="pay_submit_select_select">
                            <option value="" className="pay_submit_select_select_option">Chọn phương thức thanh toán</option>
                            <option value="offline" className="pay_submit_select_select_option">Thanh toán khi nhận hàng</option>
                            <option value="online" className="pay_submit_select_select_option">Thanh toán Momo</option>
                    </select>
                    <select name="" id="" className="pay_submit_select_voucher">
                            <option value="freeship" className="pay_submit_select_voucher_freeship">Miễn phí vận chuyển</option>
                            <option value="discount" className="pay_submit_select_voucher_discount">Giảm giá 10%</option>
                    </select>
                </div>
                <form className="pay_submit_form" onSubmit="">
                    <div className="pay_submit_form_username">Username: {username}</div>
                    <div className="pay_submid_form_price">Tổng Thanh toán: {sumPrice}</div>
                    <input type="text" />
                    <button>Đặt hàng</button>
                </form>
            </div>
               

        </div>
    )
}

export default Pay