import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { GlobalContext } from '../../GlobalContext'

import './search.scss'
const Loading = () => {
    return (
        <div className="search_container">
            <div className="search_container_title">Tìm kiếm: {searchInput.toLocaleLowerCase()}</div>
            <div className="search_container_list">
                Đang tìm kiếm dữ liệu
            </div>
        </div>        
    )
}

const Search = ({value,searchInput,setSearchInput, setDataSearch}) => {
    const nav = useNavigate()
    const changeUrl = (value) => {
        setSearchInput()
        setDataSearch()
        nav(`/shop/${value.categoryName}/${value.id}`)
    }
    if (!value[0]){
        return (
            <div className="search_container">
                <div className="search_container_title">Tìm kiếm: {searchInput.toLocaleLowerCase()}</div>
                <div className="search_container_list null">
                    Không có sản phẩm phù hợp
                </div>
            </div>        
        )
    } else{
        return (
            <div className="search_container">
                <div className="search_container_title">Tìm kiếm: {searchInput.toLocaleLowerCase()}</div>
                <div className="search_container_list">
                    {value.map((product,index)=>{
                        return(
                            <div className="search_container_list_item pointer" key={index} onClick={()=>changeUrl(product)}>
                                <img src={product.img[0]} alt={product.name} className="search_container_list_item_img" />
                                <div className="search_container_list_item_infor">
                                    <div className="search_container_list_item_infor_name">{product.name}</div>
                                    <div className="search_container_list_item_infor_author">{product.author}</div>
                                    <div className="search_container_list_item_infor_price">Price: {product.price}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export {Loading, Search}