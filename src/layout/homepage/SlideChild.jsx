


const Slide1 = ({slideData, handleChangeSlide}) => {
    return(
        <div className="slides">
            <img src={slideData.img} alt="slide img" className='slides_img'/>
            <div className="slides_content">
                <h3 className="slides_content_title">{slideData.title}</h3>
                <p className="slides_content_description">{slideData.description}</p>
            </div>
            <div className="slides_control">
                <button className="slides_control_prev" onClick={()=>{handleChangeSlide(-1)}}>
                    <i className="fa-solid fa-chevron-left slides_control_prev_icon"></i>
                </button>
                <button className="slides_control_next"onClick={()=>{handleChangeSlide(1)}}>
                    <i className="fa-solid fa-chevron-right slides_control_prev_icon"></i>
                </button>
            </div>
        </div>
    )
}
const Slide2 = ({slideData, handleChangeSlide}) => {
    return(
        <div className="slides">
            <img src={slideData.img} alt="slide img" className='slides_img'/>
            <div className="slides_content">
                <h3 className="slides_content_title">{slideData.title}</h3>
                <p className="slides_content_description">{slideData.description}</p>
            </div>
            <div className="slides_control">
                <button className="slides_control_prev" onClick={()=>{handleChangeSlide(-1)}}>
                    <i className="fa-solid fa-chevron-left slides_control_prev_icon"></i>
                </button>
                <button className="slides_control_next"onClick={()=>{handleChangeSlide(1)}}>
                    <i className="fa-solid fa-chevron-right slides_control_prev_icon"></i>
                </button>
            </div>
        </div>
    )
}

export {Slide1, Slide2}