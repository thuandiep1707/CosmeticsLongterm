import {useParams} from 'react-router-dom'

import './shopsproduct.scss'
import { useState } from 'react'

const ShopsProduct = (props) => {
    //lấy params
    const param = useParams()
    
    //api
    const product = props.productsData.filter(product => product.category.name == param.styleproducts).find(product => product.id == param.id)
    
    //xử lý thay đổi img
    const [imgNum, setImgNum] = useState(0)
    // const handleChangeImg[]

    //nhận số lượng sản phẩm 
    const [productSum,setProductSum] = useState(1)


    return(
    <div className="shopsproduct">
        <section className="shopsproduct_content">
            <div className="shopsproduct_content_imglist">
                <img src={product.img[imgNum]}  className="shopsproduct_content_imglist_bigimg"/>
                <div className="img_change">
                    <div className="img_prev"/>
                    <div className="img_next"/>
                </div>
                <div className="shopsproduct_content_imglist_smallimg">
                {product.img.map((imgChild,index) =>{
                    return <img src={imgChild} key={index}  className='shopsproduct_content_imglist_smallimg_imgchild' />
                })}
                </div>
            </div>
            <div className="shopsproduct_content_information">
                <h2 className="shopsproduct_content_information_title">NƯỚC HOA JILLIAN - {product.name}</h2>
                <h5 className="shopsproduct_content_information_producer">EAU DE PARFUM</h5>
                <p className="shopsproduct_content_information_description">{product.propoties.description}</p>
                <div className="shopsproduct_content_information_milprice">
                    <p className="mil">50ml</p>
                    <p className="price">{product.price}đ</p>
                </div>
                <div className="shopsproduct_content_information_sumadd">
                    <input type="number" value={productSum} className='sum'/>
                    <div className="add btn">THÊM VÀO GIỎ HÀNG</div>
                </div>
                <div className="shopsproduct_content_information_set">
                    <h6 className="set_title">Discovery Set</h6>
                    <p className="set_content">Trải nghiệm thử set tại cửa hàng trước khi quyết định. </p>
                </div>
            </div>
        </section>
    </div>)
}

export default ShopsProduct;