import {useState, useEffect, useContext} from 'react'
import {Link, useParams} from 'react-router-dom'

import ProductCard from '../../components/productCard/ProductCard'
import { GlobalContext } from '../../GlobalContext'

import './productdetail.scss'


const ProductDetail = () => {
    const {productstyle, id} = useParams()
    const {productsData} = useContext(GlobalContext)
    const [likeStyleList, setLikeStyleList] = useState(productsData)
    const [recommendList, setRecommendList ] = useState(productsData) //danh sách sản phẩm ở phần recommend
    const [product, setProduct] = useState(productsData[Number(id)-1]) //thông tin sản phẩm sẽ hiển thị
    const [quantity, setQuantity] = useState(1) // số lượng sản phẩm sẽ mua

    const handleProductListFilter = () => {
        let list4Products = new Array(4)
        let position = Number(id)
        setProduct(productsData[position-1])
        
        //lọc ra danh sách các sản phẩm có cùng loại
        let listOfStyle = productsData.filter((value)=>{return value.categoryName === productstyle})
        //từ trong danh sách cùng loại, mặc định vị trí phần tử bắt đầu (position) là số id, lấy ra 4 sản phẩm.
        //bắt đàu vòng lặp,gán giá trị sản phẩm tìm được từ listOfStyle ở vị trị position vào trong list4Products. Do id trong data đi từ 1 nên khi gán position = id thì mặc định sẽ lấy phần tử tiếp theo.
        //tăng position lên 1 rồi kiểm tra, nếu posion = độ dài danh sách cùng loại ban đầu thì gán giá trị 0 cho posion và tiep tục vòng lặp
        for (let i = 0; i<4; i++){
            if (position == listOfStyle.length){
                position=0
            }
            list4Products[i] = listOfStyle[position]
            position+=1
        }
        setLikeStyleList(list4Products)
    }

    useEffect(()=>{
        handleProductListFilter()
        window.scrollTo({top:0,left:0,behavior:"smooth"})
    },[id])

    const handleChangeQuantity = (value)=>{
        setQuantity(value)
    }
    const handleClickAdd = () => {
        //
        console.log("add")
    }
    const handleCLickBuy = () => {
        //
        console.log("buy")
    }
    return (
        <div className="product_detail">
            <div className="product_detail_nav">
                <Link to="/" className='link' >longterm</Link> / <Link to='/shop/general' className="link">CỬA HÀNG</Link> / <Link to={`/shop/${productstyle}`} className="link">{productstyle}</Link> / <Link to={`/shop/${productstyle}/${id}`} className="link">{product.name}</Link>
            </div>
            <div className="product_detail_container">
                <div className="product_detail_container_group_img">
                    <img src={product.img[0]} className="product_detail_container_group_img_big"></img>
                    <div className="product_detail_container_group_img_list">
                    {product.img.map((value, index) => {
                        return (
                            <img src={value} alt="" className="product_detail_container_group_img_list_item" key={index} />
                        )
                    })}
                    </div>
                </div>
                <div className="product_detail_container_content">
                    <h2 className="product_detail_container_content_name">{product.name}</h2>
                    <h4 className="product_detail_container_content_author">{product.author}</h4>
                    <p className="product_detail_container_content_price">{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(product.price)}</p>
                    <p className="product_detail_container_content_description">{product.propoties.description}</p>
                    <div className="product_detail_container_content_quantity">
                        <label htmlFor="quantity">Số lượng: </label>
                        <input id="quantity" type="number" value={quantity} onChange={(e)=>{handleChangeQuantity(e.target.value)}} className="product_detail_container_content_quantity_input" />
                    </div>   
                    <div className="product_detail_container_content_btn">
                        <button className="product_detail_container_content_btn_add" onClick={()=>handleClickAdd()}>
                            <i className="fa-solid fa-cart-shopping header_tool_cart header_tool_element"/>
                            THÊM VÀO GIỎ HÀNG
                        </button>
                        <button className="product_detail_container_content_btn_buy" onClick={()=>handleCLickBuy()}>MUA NGAY</button>
                    </div>
                    <p className="product_detail_container_content_discovery">Discovery Set</p>
                    <p className="product_detail_container_content_try">Quý khách có thể trải nghiệm trực tiếp sản phẩm tại cửa hàng trước khi quyết định</p>
                </div>
            </div>
            <div className="product_detail_like_style">
                <p className="product_detail_like_style_title">CÁC SẢN PHẦM CÙNG LOẠI</p>
                <div className="product_detail_like_style_list">
                    {
                        likeStyleList.map((value, index)=>{
                            return <ProductCard productData={value} key={index} />
                        })
                    }
                </div>
            </div>
            <div className="product_detail_recommend">
                <p className="product_detail_recommend_title">CÓ THỂ BẠN CŨNG THÍCH</p>
                <div className="product_detail_recommend_list">
                    {
                        recommendList.map((value, index)=>{
                            return <ProductCard productData={value} key={index} />
                        })
                    }
                </div>
            </div>
        </div>
        )
}

export default ProductDetail;