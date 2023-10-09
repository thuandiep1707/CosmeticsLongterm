import { useState, useEffect } from 'react';

import {Slide1,Slide2} from './SlideChild'
import '../style/slides.scss'

const Slides = ({slideShow})=>{
    const [numSlide, setNumSlide] = useState(4)
    const [changeSlide, setChangeSlide] = useState(true)
    const handleChangeSlide = (value) => {
        let num = numSlide + value
        setChangeSlide(!changeSlide)
        if (num < 0) return setNumSlide(4)
        if (num > 4) return setNumSlide(0)
        console.log(numSlide)
        console.log("value", value)
        return setNumSlide(num)
    }
    // console.log(numSlide)
    useEffect(()=>{
        const interval = setInterval(() => {
            handleChangeSlide(1)
            // console.log(1)
        }, 3000);
        return () => clearInterval(interval);
    }, [changeSlide])
    return (
        <>
            {changeSlide === true ? <Slide1 slideData={slideShow[numSlide]}  handleChangeSlide={handleChangeSlide}/> : <Slide2 slideData={slideShow[numSlide]}  handleChangeSlide={handleChangeSlide}/>}
        </>
    )
}


export default Slides;