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
        alert("Đơn hàng đã được xác nhận và sẽ vận chuyển trong thời gian sớm nhất")
        setCart(null)
        nav("/")
    }

    const handleOutHome = () => {
        nav("/")
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
                <div className="check_out_cart_list_name">Sản phẩm đã chọn</div>
                    {cart.map((value, index) => {return(
                        <div className="check_out_cart_list_item" key={index}>
                            <img src={value.img} alt="" className="check_out_cart_list_item_img" onClick={()=>handleChangeUrl(value)}/>
                            <div className="check_out_cart_list_item_infor" onClick={()=>handleChangeUrl(value)}>
                                <p className="check_out_cart_list_item_infor_name">{value.name}</p>
                                <p className="check_out_cart_list_item_infor_price">Giá: {value.price}</p>
                                <p className="check_out_cart_list_item_infor_quantity">Số lượng: {value.quantity}</p>
                            </div>
                            <i className="fa-solid fa-xmark check_out_cart_list_item_del pointer" onClick={()=>handleClickDel(value)}></i>
                        </div>
                    )})}
                </div>
                <div className="check_out_user_infor">
                    <div className="check_out_user_infor_name">Thông tin khách hàng</div>
                    <div className="check_out_user_infor_box">
                        <div className="check_out_user_infor_box_name">Tên khách hàng:</div>
                        <div className="check_out_user_infor_box_name_user">Ngọ Văn Long</div>
                        <div className="check_out_user_infor_box_adress">Địa chỉ:</div>
                        <div className="check_out_user_infor_box_adress_user"> Quận 12, Tp. Hồ Chí Minh</div>
                        <div className="check_out_user_infor_box_phone">Số điện thoại:</div>
                        <div className="check_out_user_infor_box_phone_user"> 0326xxxxxx</div>
                        <div className="check_out_user_infor_box_">Phương thức thanh toán:</div>
                        <div className="check_out_user_infor_box_">Thanh toán khi nhận hàng</div>
                    </div>
                    <p className="check_out_user_infor_line_end">Nhấn "Đặt hàng ngay" đồng nghĩa với việc bạn đồng ý tuân theo Điều khoản Long-term</p>
                    <div className="check_out_user_infor_btn pointer">
                        <button className="check_out_user_infor_btn_out" onClick={()=>{handleOutHome()}}>VỀ TRANG CHỦ</button>
                        <button className="check_out_user_infor_btn_pay" onClick={()=>{handleCheckOut()}}>ĐẶT HÀNG NGAY</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CheckOut;