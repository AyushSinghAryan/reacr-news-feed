import React from 'react'

const NewsItem =(props)=> {
  
    let {title,desciption,imageUrl,newsUrl,author,date} = props;
    return (
      <div className="my-3 ">
        <div className="card" >
  <img className="card-img-top" src={!imageUrl?"https://img.etimg.com/thumb/msid-102034525,width-650,height-488,imgsize-34798,,resizemode-75/twitter-and-other-platforms-to-take-down-manipur-video-centre.jpg":imageUrl} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{desciption}</p>
    <p className="card-text"><small className="text-muted">By {!author?"unknown":author} on { new Date(date).getDate()}/{new Date(date).getMonth()}/{new Date(date).getFullYear()}</small></p>
    <a rel="noreferrer" href={newsUrl}  target="_blank" className="btn btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  
}

export default NewsItem

// <h5 className="card-title">{title}...</h5>
// <p className="card-text">{desciption}...</p>