import {Link} from 'react-router-dom'
import './slideshow.scss'

const SlideShow = ({slideShow, handleChangeNum}) => {
    return (
        <div className="slideshow">
            <img src={slideShow.img} alt="slide" className='slideshow_img' style={{ objectFit: 'cover', objectPosition: 'center' }} />
            <div className="slideshow_contents">
                <button
                    type='button'
                    className="prev"
                    onClick={()=>{props.handleChangeNum(-1)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m15 6l-6 6l6 6"/></svg>
                    <span className='buttonText' aria-hidden='true'>Prev</span>
                </button>
                <button 
                    type='button'
                    className="next"
                    onClick={()=>{handleChangeNum(1)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m9 6l6 6l-6 6"/></svg>
                    <span className='buttonText' aria-hidden='true'>Next</span>
                </button>
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