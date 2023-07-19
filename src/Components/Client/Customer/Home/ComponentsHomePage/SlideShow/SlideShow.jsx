import {Link} from 'react-router-dom'
import './slideshow.scss'
import { useEffect } from 'react';

const SlideShow = (props) => {
    const slideShow = props.slideShow
    // console.log(slideShow)
    useEffect(()=>{},[slideShow.title])
    return (
        <div className="slideshow">
            <img src={slideShow.img} alt="slide" className='slideshow_img' />
            <div className="slideshow_contents">
                <div 
                    className="prev"
                    onClick={()=>{props.handleChangeNum(-1)}}>
                    <p>Prev</p>
                </div>
                <div 
                    className="next"
                    onClick={()=>{props.handleChangeNum(1)}}>
                    <p>Next</p>
                </div>
                <div className="slideshow_contents_content">
                    <p className="title">{slideShow.title}</p>
                    <p className="content">{slideShow.content}</p>
                    <Link to={slideShow.url} className='link btnchitiet'>Chi tiết</Link>
                </div>
            </div>
        </div>
    )
}

export default SlideShow;