

import "./portfolio.scss"


export default ({portfolio}) => {
    return (
        <div className="portfolio">
            <img src={portfolio.img} alt="" className="portfolio_img" />
            <div className="portfolio_content">
                <p className="portfolio_content_title">{portfolio.title}</p>
                <p className="portfolio_content_content">{portfolio.content}</p>
            </div>
        </div>
    )
}


