import {Link} from 'react-router-dom';

import './productbestsale.scss'

const ProductBestSaller = (props) => {
    const bestSaleData = props.bestSaleData
    return(
        <div className="productbestsaller">
            <h1 className='title'>
                SẢN PHẨM NỔI BẬT
            </h1>
            <div className="products">
                {bestSaleData.map((value,index)=>{
                    return(
                        <div className="products_product" key={index}>
                            <img src={value.img} alt={value.name}  className='img'/>
                            <p className="name">{value.name}</p>
                            <p className="producer">{value.producer}</p>
                            <p className="price">{value.price}</p>
                            <Link to={value.url} className='link products_product_btn'>XEM CHI TIẾT</Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductBestSaller;