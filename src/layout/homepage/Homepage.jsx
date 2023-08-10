import {useContext, useState} from 'react'

import { GlobalContext } from '../../GlobalContext';
import Slides from './components/Slides';
import ProductCard from '../../components/productCard/ProductCard';

import "./style/homepage.scss"

const Homepage = () => {
    const {slideShow,bestSales,portfolio} =useContext(GlobalContext)

    window.scroll(0,0)

    return(
        <div className="homepage">
            <Slides slideShow={slideShow} />
            <div className="homepage_bestsales">
                <h2 className="homepage_bestsales_title">SẢN PHẨM NỔI BẬT</h2>
                <div className="homepage_bestsales_items">
                    {bestSales.map((value, index)=> {return <ProductCard productData={value} key={index}/>})}
                </div>
            </div>
            <div className="homepage_portfolio">
                <h2 className="homepage_portfolio_title">PORTFOLIO</h2>
                <div className="homepage_portfolio_items">
                    {portfolio.map((value, index)=>{
                        return(
                            <div key={index} className='homepage_portfolio_items_item'>
                                <img src={value.img} alt="" className="homepage_portfolio_items_item_img" />
                                <div className="homepage_portfolio_items_item_description">
                                    <h2 className="homepage_portfolio_items_item_description_title">{value.title}</h2>
                                    <h5 className="homepage_portfolio_items_item_description_content">{value.content}</h5>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Homepage;