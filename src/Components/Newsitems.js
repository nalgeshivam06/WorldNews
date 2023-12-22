import React from 'react' 

const Newsitems = (props) => {

  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <img src={!imageUrl ? "https://techcrunch.com/wp-content/uploads/2023/09/Lotus-Emeya-outside.jpg?resize=1200,675" : imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}<span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{ left: '82%', zIndex: '1' }} >{source} </span></h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-body-secondary"><b>By {author ? author : 'Unknown'} on {date}</b></small></p>
          <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary mx-3">Read More..</a>
        </div>
      </div>
    </div>
  ) 

}
export default Newsitems;

