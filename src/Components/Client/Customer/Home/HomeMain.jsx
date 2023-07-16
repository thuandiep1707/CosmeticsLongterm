import {useState} from 'react';

import SlideShow from './ComponentsHomePage/SlideShow/slideshow';
import ProductBestSale from './ComponentsHomePage/ProductsBestSale/ProductsBestSale';

import slideData from './ComponentsHomePage/SlideShow/data';
import bestSaleData from './ComponentsHomePage/ProductsBestSale/data';

import './homepage.scss'

const HomeMain = () => {
    //Xử lý cho phần slide
    const [slideNum,changeSlideNum] = useState(0);
    const handleChangeNum = (value) => {
        let num = slideNum+value
        if (num > 4) {
            return changeSlideNum(0)
        } else if (num < 0) {
            return changeSlideNum(4)
        }
        // console.log(slideNum)
        return changeSlideNum(num)
    }
    // setInterval(console.log(slideNum+1), 1000)

    //xử lý cho phần best sale
    return (
        <div className="homepage">
            <SlideShow 
            handleChangeNum={handleChangeNum}
            img={slideData[slideNum].img}
            title={slideData[slideNum].title}
            content={slideData[slideNum].content}
            url={slideData[slideNum].url}/>
            <ProductBestSale 
            bestSaleData={bestSaleData}/>
            <div className="homepage_space"></div>
        </div>
    )
}

export default HomeMain;