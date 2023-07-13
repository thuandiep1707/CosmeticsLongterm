import {Link} from 'react-router-dom'

import slideData from './data';
import './slideshow.scss'
import { useEffect } from 'react';

const SlideShow = (props) => {
    // console.log(slideData)
    useEffect(()=>{},[props.title])
    return (
        <div className="slideshow">
            <img src={props.img} alt="slide" className='slideshow_img' />
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
                    <p className="title">{props.title}</p>
                    <p className="content">{props.content}</p>
                    <Link to={props.url} className='link btnchitiet'>Chi tiết</Link>
                </div>
            </div>
        </div>
    )
}

export default SlideShow;