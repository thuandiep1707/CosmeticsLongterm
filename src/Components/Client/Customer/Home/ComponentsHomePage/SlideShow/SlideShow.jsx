import {useState} from 'react';
import {Link} from 'react-router-dom'

import slideData from './data'

import './slideshow.scss'

const SlideShow = () => {
    // console.log(slideData)
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
    return (
        <div className="slideshow">
            <img src={slideData[slideNum].img} alt="slide" className='slideshow_img' />
            <div className="slideshow_contents">
                <div 
                    className="prev"
                    onClick={()=>{handleChangeNum(-1)}}>
                    <p>Prev</p>
                </div>
                <div 
                    className="next"
                    onClick={()=>{handleChangeNum(1)}}>
                    <p>Next</p>
                </div>
                <div className="slideshow_contents_content">
                    <p className="title">{slideData[slideNum].title}</p>
                    <p className="content">{slideData[slideNum].content}</p>
                    <Link to={slideData[slideNum].url} className='link btnchitiet'>Chi tiết</Link>
                </div>
            </div>
        </div>
    )
}

export default SlideShow;