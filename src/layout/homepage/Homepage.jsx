import {useContext, useState} from 'react'

import { GlobalContext } from '../../GlobalContext';
import Slides from "./Slides";
import ProductCard from '../../components/productCard/ProductCard';

import "./homepage.scss"

const Homepage = () => {
    const {slideShow,bestSales,portfolio} =useContext(GlobalContext)

    window.scroll(0,0)

    return(
        <div className="homepage">
            <Slides slideShow={slideShow} />
            <h2 className="bestsale_title">SẢN PHẨM NỔI BẬT</h2>
            <div className="bestsales">
                {bestSales.map((value, index)=> {return <ProductCard productData={value} key={index}/>})}
            </div>
            <div className="portfolio">
                <h2 className="portfolio_title">PORTFOLIO</h2>
                {portfolio.map((value, index)=>{
                    return(
                        <div key={index} className='portfolio_item'>
                            <img src={value.img} alt="" className="portfolio_item_img" />
                            <div className="portfolio_item_description">
                                <h3 className="portfolio_item_description_title">{value.title}</h3>
                                <h5 className="portfolio_item_description_content">{value.content}</h5>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Homepage;