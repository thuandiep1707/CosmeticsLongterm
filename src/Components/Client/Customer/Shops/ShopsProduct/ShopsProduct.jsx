import {useContext, useState } from 'react'
import {useParams, Link} from 'react-router-dom'

import { GlobalContext } from '../../../../../GlobalContext'

import './shopsproduct.scss'

const ShopsProduct = (props) => {
    //lấy params
    const param = useParams()

    //lấy data từ context
    const globalContext = useContext(GlobalContext)
    const cart = globalContext.cart
    
    //lấy dữ liệu
    const product = props.productsData.filter(product => product.category.name == param.styleproducts).find(product => product.id == param.id)
    
    //xử lý thay đổi img
    const [imgNum, setImgNum] = useState(0)
    const handleChangeImg = (value) => {
        let num = imgNum+value;
        if (num > product.img.length-1){return setImgNum(0)} else if (num < 0) {return setImgNum(product.img.length-1)}
        return setImgNum(num)
    }

    //nhận số lượng sản phẩm 
    const [productSum,setProductSum] = useState(1)
    
    //xử lý data đưa hàng vào giỏ hàng
    
    const handleAddProductToCart = () => {
        let newProduct = {
            "id"      : product.id,
            "name"    : product.name,
            "price"   : product.price,
            "img"     : product.img[0],
            "category": {
                "id"     : product.category.id,
                "name"   : product.category.name
            },
            "quantity":productSum
        }
        // let oldProduct = cart.filter(product => product.id==newProduct.id)
        // console.log("old>>>>>")
        // console.log(oldProduct)
        // if (oldProduct){
        //     console.log("hehehe")
        //     let cartFilter= cart.filter(product => product.id !== oldProduct.id)
        //     console.log("cart"+oldProduct)
        //     console.log("check>>>>>>>")
        //     console.log(cartFilter)
        //     // return globalContext.setCart(cartFilter)
        // }
         globalContext.setCart([...cart,newProduct])
        //  console.log(cart)
    }

    return(
        <div className="shopsproduct">
            <section className="shopsproduct_content">
                <div className="shopsproduct_content_imglist">
                    <img src={product.img[imgNum]}  className="shopsproduct_content_imglist_bigimg"/>
                    <div className="img_change">
                        <div className="img_prev" onClick={()=>handleChangeImg(-1)}/>
                        <div className="img_next" onClick={()=>handleChangeImg(1)}/>
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
                        {/* <p className="mil"><u>50ml</u></p> */}
                        <p className="price">{product.price}đ - <del>{product.price*110/100}đ</del></p>
                    </div>
                    <div className="shopsproduct_content_information_sumadd">
                        <input type="number" value={productSum} onChange={e=>setProductSum(e.target.value)} className='sum'/>
                        <div className="add btn" onClick={()=>{handleAddProductToCart()}}>THÊM VÀO GIỎ HÀNG</div>
                    </div>
                    <div className="shopsproduct_content_information_set">
                        <h6 className="set_title">Discovery Set</h6>
                        <p className="set_content">Trải nghiệm thử set tại cửa hàng trước khi quyết định. </p>
                    </div>
                </div>
            </section>
            <div className="shopsproduct_recommend">
                <div className="shopsproduct_recommend_around">
                    {
                        props.productsData.map((product,index)=>{
                            return(
                                <div key={index} className="shopsproduct_recommend_around_product">
                                    <div className="shopsproduct_recommend_around_product_around">
                                        <img src={product.img[0]} alt="" className="shopsproduct_recommend_around_product_around_img" />
                                        <h3 className="shopsproduct_recommend_around_product_around_name">{product.name}</h3>
                                        <p className="shopsproduct_recommend_around_product_around_producer">EAU DE PARFUM</p>
                                        <h5 className="shopsproduct_recommend_around_product_around_price">{product.price}đ</h5>
                                        <Link 
                                            to={`/shops/${product.category.name}/${product.id}`} 
                                            className='link shopsproduct_recommend_around_product_around_btn'
                                            onClick={()=>{window.scrollTo({top: 530, left:0, behavior: 'smooth'})}}>XEM CHI TIẾT</Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ShopsProduct;