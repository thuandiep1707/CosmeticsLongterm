import { useEffect, useState } from 'react';

import {Slide1,Slide2} from './SlideChild'
import './slides.scss'

const Slides = ({slideShow})=>{
    const [numSlide, setNumSlide] = useState(3)
    const [changeSlide, setChangeSlide] = useState(true)
    const handleChangeSlide = (value) => {
        let num = numSlide + value
        setChangeSlide(!changeSlide)
        if (num < 0) return setNumSlide(4)
        if (num > 4) return setNumSlide(0)
        return setNumSlide(num)
    }
    return (
        <>
            {changeSlide === true ? <Slide1 slideData={slideShow[numSlide]}  handleChangeSlide={handleChangeSlide}/> : <Slide2 slideData={slideShow[numSlide]}  handleChangeSlide={handleChangeSlide}/>}
        </>
    )
}


export default Slides;