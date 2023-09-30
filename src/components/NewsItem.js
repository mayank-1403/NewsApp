import React, { Component } from 'react'

export class NewsItem extends Component {
    constructor() {
        super();
        console.log("hello i am a constructor")
    }

    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className='my-3'><div className="card">
                <img src={!imageUrl ? "https://images.moneycontrol.com/static-mcnews/2023/08/Sensex_market_Nifty-1-770x433.jpg" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...<span class="position-absolute top-0 translate-middle badge rounded-pill bg-success" style={{left:'90%', zIndex:'1'}}>{source}</span></h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small class="text-body-secondary">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btm-sm btn-dark">Read More</a>
                </div>
            </div></div>
        )
    }
}

export default NewsItem