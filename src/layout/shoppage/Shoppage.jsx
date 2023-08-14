import {useState, useContext, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'

import { GlobalContext } from '../../GlobalContext'
import ProductCard from '../../components/productCard/ProductCard'

import './shoppage.scss'

const Shoppage = () => {
    const {productstyle} = useParams()
    const {productsData} = useContext(GlobalContext)
    const [list, setList] = useState()
    const [number, setNumber] = useState()
    
    window.scroll(0,0)

    //ở bước này, chúng ta sẽ kiểm tra giữa productstyle lấy từ param và categoryName từ data để đưa ra danh sách tương thích
    const productDataFilter = () => {
        let list = productsData.filter((product)=> {return product.categoryName === productstyle})
        setList(list)
        setNumber(list.length)
        console.log(list)
    }
    useEffect(()=>{
        if (productstyle === "general") {
            setList(productsData)
            setNumber(productsData.length)
        }
        else{productDataFilter()}
    },[productstyle])
    if (!number){
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
                        <div className="shoppage_container_nav_quantity">Số lượng: 0</div>
                    </div>
                    <div className="shoppage_container_productnull">Danh mục hiện chưa có sản phẩm </div>
                </div>
            </div>
        )
    } else {
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
                        <div className="shoppage_container_nav_quantity">Số lượng: {number}</div>
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
}

export default Shoppage;