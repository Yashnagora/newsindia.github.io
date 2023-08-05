import React, { useEffect } from 'react'
import Newsitam from './Newsitam'
import PropTypes from 'prop-types'
import Spinner from './Spinner'
import {useState} from 'react'

const Newstop = (props) =>{
const style = props.style
const Color = props.Color
const [articles, setarticles] = useState([])
const [loading, setloading] = useState(true)
const [page, setpage] = useState(1)

const updateNews = async () => {
  props.setprogress(0);
  const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=670ad19c0ea8408e97a152b189c43dfc&page=${page}&pageSize=${props.pageSize}`
  setloading(true);
  let data = await fetch(url);
  props.setprogress(30);
  let parsedData = await data.json();
  props.setprogress(70);
  setloading(false);
  setarticles(parsedData.articles);
  setarticles(parsedData.articles);
  props.setprogress(100);
};

useEffect(() => {
  updateNews();
  // eslint-disable-next-line react-hooks/exhaustive-deps
},[]);


 const handlePrevClick = async () => {
   updateNews();
   setpage(page - 1);
}

const handleNextClick = async () => {
  updateNews();
  setpage(page + 1);
}

    return (
      <div className='container my-3'>
        <h2 className={`text-${props.Color}`} style={{textAlign: "center", margin: "86px 0px 35px 0px"}}>News Indias top - {props.category}</h2>
        {loading && <Spinner Color={Color}/>}  <div className='row'>
          {!loading && articles.map((element)=>{
           return <div className='col-md-4'  key={element.url}>
            <Newsitam title = {element.title} description = {element.description} imageurl = {element.urlToImage} newsurl={element.url}style={style}/>
          </div>
         })}
            <div className="container d-flex justify-content-between">
              <button type="button" className="btn btn-dark" onClick={handlePrevClick}> &larr; Previous</button>
              <button type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
            </div>
        </div>
      </div>
    )
  }
  Newstop.defaultProps = {
    country : 'in',
    category: 'general',
};

Newstop.propTypes = {
    category: PropTypes.string,
    country: PropTypes.string,
}
export default Newstop