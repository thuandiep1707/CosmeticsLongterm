import {useState, useEffect, useContext} from 'react'
import {useParams} from 'react-router-dom'

import { GlobalContext } from '../../GlobalContext'

import './productdetail.scss'


const ProductDetail = () => {
    const {productstyle, id} = useParams()
    const {productsData} = useContext(GlobalContext)
    
    const [productList, setProductList ] = useState(productsData)
    const [product, setProduct] = useState()
    
    //dùng filter để lọc ra những sản phẩm thuộc cùng 1 nhóm hàng sau đó lưu vào biến list
    //dùng filter lần 2 để tìm kiếm sản phẩm hiển thị theo ID rồi lưu nó vào useState của product
    //lưu mảng list vừa tìm được vào useState của productList
    const handleProductListFilter = () => {
        let list = productsData.filter((value)=>{return value.categoryName === productstyle})
        setProduct(list.filter((value)=>{return value.id === id}))
        setProductList(list)
    }

    useEffect(()=>{
        handleProductListFilter()
    },[id])

    console.log(product)
    console.log(productList)
    return (
        <div className="product_detail">
            <div className="product_detail_container">
                <div className="product_detail_container_group_img">
                    <div className="product_detail_container_group_img_big"></div>
                    <div className="product_detail_container_group_img_list"></div>
                </div>
                <div className="product_detail_container_content">
                    <div className="product_detail_container_content_name"></div>
                    
                </div>
            </div>
            <div className="product_detail_recommend"></div>
        </div>
        )
}

export default ProductDetail;