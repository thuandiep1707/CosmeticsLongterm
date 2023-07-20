import {Link} from 'react-router-dom'

import './productbestsale.scss'

const Product = ({product}) => {
    let url = `/customers/shops/${product.category.name}/${product.id}`
    return (
        <div className="bestsale_product">
            <div className="bestsale_product_around">
                <img src={product.img[0]} alt="" className="bestsale_product_around_img" />
                <h3 className="bestsale_product_around_name">{product.name}</h3>
                <p className="bestsale_product_around_producer">EAU DE PARFUM</p>
                <h5 className="bestsale_product_around_price">{product.price}đ</h5>
                <Link to={url} className='link bestsale_product_around_btn'>XEM CHI TIẾT</Link>
            </div>
        </div>
    )
}

export default Product;