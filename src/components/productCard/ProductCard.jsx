import {useNavigate} from 'react-router-dom'

import './productcard.scss'

const ProductCard = ({productData}) => {
    const nav = useNavigate()
    const handleChangeUrl = () => {
        nav(`/shop/${productData.categoryName}/${productData.id}`)
    }
    return(
        <div className="product_card">
            <img src={productData.img[0]} alt={productData.name} className="product_card_img" />
            <h3 className="product_card_name">{productData.name}</h3>
            <h4 className="product_card_author">EAU DE PARFUM</h4>
            <h5 className="product_card_price">{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(productData.price)}</h5>
            <button className="product_card_btn" onClick={()=>{handleChangeUrl()}}>XEM CHI TIẾT</button>
        </div>
    )
}
export default ProductCard;