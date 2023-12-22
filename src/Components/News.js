import React, { useState, useEffect, useCallback } from 'react'
import Newsitems from './Newsitems'
import PropTypes from 'prop-types'

const News = (props) => {
  const [articles, setarticles] = useState([])
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)
   const [title, settitle] = useState({title : "GENERAL"})

  const updateNews = useCallback(async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pagesize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData)

    setarticles(parsedData.articles)
    settotalResults(parsedData.totalResults)
    settitle(props.category)
  

  });

  useEffect(() => {
    updateNews();
     // eslint-disable-next-line
    

  }, [updateNews]);

  const handlePrevClick = async () => {
    setpage(page - 1)
    updateNews();
  }


  const handleNextClick = async () => {
    setpage(page + 1)
    updateNews();
  }
  

  return (

    <div className='container my-5'>
      <h1 className="text-center my-3" style={{ margin: '30px 0px' }}><strong>TOP {props.category} HEADLINES </strong></h1>

      <div className="row">
        {articles?.map((element) => {
          return <div className="col-md-4" key={element.url}>
            <Newsitems title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
          </div>
        })}
      </div>
      <div className="container d-flex justify-content-between my-3">
        <div className="container d-flex justify-content-between">
          <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handlePrevClick}> &larr;
            Previous</button>
          <button disabled={page + 1 > Math.ceil(totalResults / 20)} type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    </div>
  )

}
News.defaultProps = {
  country: 'in',
  pagesize: 6,
  category: 'general'

}
News.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string,

}

export default News;
