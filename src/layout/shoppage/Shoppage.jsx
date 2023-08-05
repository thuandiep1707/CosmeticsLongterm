import {useState, useContext, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'

import { GlobalContext } from '../../GlobalContext'
import ProductCard from '../../components/productCard/ProductCard'

import './shoppage.scss'

const Shoppage = () => {
    const {productstyle} = useParams()
    const {productsData} = useContext(GlobalContext)
    const [list, setList] = useState(productsData)
    
    window.scroll(0,0)

    //ở bước này, chúng ta sẽ kiểm tra giữa productstyle lấy từ param và categoryName từ data để đưa ra danh sách tương thích
    const productDataFilter = () => {
        setList(
            productsData.filter((product)=> {return product.categoryName === productstyle})
        )
    }
    useEffect(()=>{
        if (productstyle === "general") {setList(productsData)}
        else{productDataFilter()}
    },[productstyle])
    return (
        <div className="shoppage">
            <div className="shoppage_header">
                <div className="shoppage_header_logo">
                    <div className="shoppage_header_logo_square"></div>
                    <div className="shoppage_header_logo_brand">Longterm</div>
                </div>
            </div>
            <div className="shoppage_container">
                <div className="shoppage_container_nav">
                    <div className="shoppage_container_nav_link">
                        <Link to='/shop/general' className="link">CỬA HÀNG</Link> / <Link to={`/shop/${productstyle}`} className="link">{productstyle === "general" ? "tất cả sản phẩm" : productstyle}</Link>
                    </div>
                    <div className="shoppage_container_nav_quantity">Số lượng: {productsData.length}</div>
                </div>
                <div className="filter"></div>
                <div className="shoppage_container_productlist">
                    {list.map((value, index)=>{
                        return <ProductCard productData={value} key={index}/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Shoppage;