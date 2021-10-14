import React, { Component } from 'react'

export default class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;

        return (
            <div className="my-3">
                <div className="card">
                    <div style={{ display: 'flex', justifyContent: 'flex-end', position: "absolute", right: 0 }}>
                        <span className="badge rounded-pill bg-danger">{source}</span>
                    </div>
                    <img src={!imageUrl ? "https://sportshub.cbsistatic.com/i/r/2021/10/08/48e14e57-23a1-4b05-8dd0-2d644ca34c3b/thumbnail/1200x675/8bd661a4a0aef16c88b934383c5ef4d2/russell-wilson-seahawks.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">

                        <h5 className="card-title">{title} </h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"> <small className="text-muted"> By {!author ? "unknown" : author} on {new Date(date).toGMTString()} </small></p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm  btn-dark">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}
