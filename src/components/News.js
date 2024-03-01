import React, { useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

// ! Constructor > render( ) > React updates DOM  > componentDidMount
const News =(props)=> {
    const [articles,setArticles]  = useState([])
    const [loading,setLoading]  = useState(true)
    const [page,setPage]  = useState(1)
    const [totalResults,setTotalResults]  = useState(0)


  
    const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  //  articles =  [{ "source": { "id": "bbc-sport", "name": "BBC Sport" }, "author": null, "title": "The Grade Cricketer: We have been comprehensively Bazballed", "description": "The Grade Cricketers reflect on day two of the fourth Ashes Test when all their Bazball fears were realised.", "url": "http://www.bbc.co.uk/sport/av/cricket/66267246", "urlToImage": "https://ichef.bbci.co.uk/news/1024/cpsprodpb/17243/production/_130478749_p0g24l95.jpg", "publishedAt": "2023-07-21T09:07:17.3744402Z", "content": "The Grade Cricketer: We have been comprehensively Bazballed. Video, 00:04:25The Grade Cricketer: We have been comprehensively Bazballed" }, { "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" }, "author": null, "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com", "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com", "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket", "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg", "publishedAt": "2020-04-27T11:41:47Z", "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]" }, { "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" }, "author": null, "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com", "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com", "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again", "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg", "publishedAt": "2020-03-30T15:26:05Z", "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]" }]
  // constructor(props) {
    // <NewsItem title= {element.title ? element.title.slice(0, 40) : ""} desciption={element.description?element.description.slice(0,60):""} imageUrl={element.urlToImage} newsUrl={element.url} />

    // super(props);
    // console.log("constructor hu news component sey!");
    // this means current object
    // this.state = {
      // articles: this.articles,
      // now after fetching from API this.article does not exist
    //   articles: [],
    //   loading: false,
    //   page: 1,
    //   totalResults:0,
    // }
    // document.title = `${this.capitalizeFirstLetter(props.category)} - NewsMonkey`;
  // }
  // now i want to give custom page number as a paramter 
  const updateNews = async()=> {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;

    // this.setState({ loading: true });
setLoading(true);
    let data = await fetch(url);
    // as soon my data is loaded set progress to 30
    props.setProgress(30);

    let parsedData = await data.json();
    // console.log(parsedData);
    props.setProgress(60);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    
    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   loading: false,
      
    // });
    props.setProgress(100);

  }
useEffect(()=>{
      document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;

  updateNews();
},[])

  // async componentDidMount() {
    // console.log("componentDidMount");
    // making page size varaible
    // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=94de7214ee1a4df4aa3f110993e1ece6&page=1&pageSize=${props.pageSize}`;
    // this.setState({loading:true});

    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log("componentDidMount");
    // this.setState({articles:parsedData.articles,
    //   totalResults:parsedData.totalResults ,
    // loading:false})

  //   this.updateNews();
  // }
//  const handlePrevoiusClick = async () => {
    // console.log("previous");
    // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=94de7214ee1a4df4aa3f110993e1ece6&page=${this.state.page -1}&pageSize=${props.pageSize}`;
    // this.setState({loading:true});

    // let data = await fetch(url);
    // let parsedData = await data.json();
    // // console.log(parsedData);
    // this.setState({articles:parsedData.articles})
    // console.log("next");
    // this.setState({
    //   page: this.state.page -1,
    //   loading:false
    // })
    // this.setState({ page: this.state.page - 1 });
  //   setPage(page-1);
  //   updateNews();
  // }

//  const handleNextClick = async () => {
    //   if(!(this.state.page +1> Math.ceil(this.state.totalResults/props.pageSize))){





    //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=94de7214ee1a4df4aa3f110993e1ece6&page=${this.state.page +1}&pageSize=${props.pageSize}`;
    //   // jasey page loading ko mey true kar duga
    //   this.setState({loading:true});
    //   let data = await fetch(url);
    //   let parsedData = await data.json();
    //   // console.log(parsedData);
    //   // this.setState({articles:parsedData.articles})
    //   console.log("next");
    //   // data agaya then false
    //   // this.setState({loading:false});
    // // ! when a user clicks on next page button i want page get update so i will state page + 1 
    //   this.setState({
    //     page: this.state.page +1,
    //     articles:parsedData.articles,
    //     loading:false

    //   })
    // };
    //total pages hogey
    // this.setState({ page: this.state.page + 1 });
  //   setPage(page+1);

  //   updateNews();
  // }

 const fetchMoreData = async() => {
  //  this.setState({page:this.state.page+1});
  // setPage(page+1);
  let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
  setPage(page+1);

   let data = await fetch(url);
   let parsedData = await data.json();
   setArticles(articles.concat(parsedData.articles))
   setTotalResults(parsedData.totalResults)
  //  this.setState({
  //    articles: articles.concat(parsedData.articles),
  //    totalResults: parsedData.totalResults,
  //  })
  };
    return (
      // <div className='container my-3 '>
      <>
        <h1 className="text-center" style={{marginTop:'70px'}} >NewsMonkey-Top {capitalizeFirstLetter(props.category)} Headlines</h1>

        {loading && < Spinner />}

        <InfiniteScroll
        // we are removing this.state 
          // dataLength={this.state.articles.length}
          // next={this.fetchMoreData}
          // hasMore={this.state.articles.length !== this.state.totalResults}
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}

        >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return <div className="col-md-4 " key={element.url} >
                <NewsItem title={element.title ? element.title : ""} desciption={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
              </div>

            })}
 </div>


          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" class="btn btn-dark" onClick={this.handlePrevoiusClick}> &larr; Prevoius</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)} type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>



        </div> */}

</>
      
    )
  
}

News.defaultProps = {
  country: 'in',
  pageSize: 6,
  category: 'technology'

}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}

export default News
