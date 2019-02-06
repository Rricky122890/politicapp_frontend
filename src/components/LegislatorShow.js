import React, {Component} from 'react'
//import {Route} from 'react-router-dom'

class LegislatorShow extends Component{

state = {
  data: {},
  profileImg: "",
  articles: []

}

 componentWillMount(){
   console.log(this.props.showLegislator);
   fetch(`https://api.propublica.org/congress/v1/members/${this.props.showLegislator.id}.json`,{
  method: "GET",
  headers: {"X-API-Key": "WPA6az5GbTjyGYhMnfmrrTopWRUsSU6dyIRVLvUO",
  // "Content-Type": "application/json",
  // Accepts: "application/json",
  // "Access-Control-Allow-Headers": "Content-Type"
 }}
 )
 .then(resp => resp.json())
 .then(json => {this.setState({data: json.results}); console.log(json.results);})
 // image api
 // fetch(`https://serpapi.com/search.json?q=${this.state.data.first_name +"+"+ this.state.data.last_name}&tbm=isch&ijn=0`)
 //  .then(res => res.json())
 //  .then(r=>{this.setState({profileImg: r.images_results["0"].thumbnail});})

 fetch(`https://newsapi.org/v2/everything?q=${this.props.showLegislator.first_name +"%"+ this.props.showLegislator.last_name}&apiKey=51e3b4fe1d1d4c5e966ba5deab6b18d6`)
    .then(res => res.json())
    // .then(a => console.log(a.articles[0].title))
     .then(json => {console.log(json.articles); this.setState({articles: json.articles})})


 }

 getArticles=()=>{
  let arr = this.state.articles.map(eachArticle=>{
    return (<div className="article article_block">
            <a href={eachArticle.url} target="_blank" > <img className="article" src={eachArticle.urlToImage} alt="article"/> </a>
              <a href={eachArticle.url}><h3> {eachArticle.title}</h3></a>
             <p>{eachArticle.description}</p>
             </div>
     )
   })
   return arr
 }



  render(){
   // console.log(this.state.articles ? this.state.articles["0"].title : " ")
   let img =  this.props.showLegislator
    let legislator =  this.state.data[0]
    let legislatorDeets = this.state.data
    console.log(legislator);
    console.log(legislatorDeets);
    //console.log(poly["0"]);
//legislator.first_name + " " + legislator.last_name}

    return(<div>
            <span>
            { legislator   ? <span className="rendered">
             <div className="row">
              <div className="col-md-6">
              <span>{ this.state.profileImg ? <img src={this.state.profileImg}/>  :<img className="img-thumbnail" src={`https://theunitedstates.io/images/congress/original/${this.props.showLegislator.id}.jpg`} /> }</span>
                 <br/>
                 <h1 className="legislatorName">{legislator.roles[0].short_title}</h1>
                 <h1 className="legislatorName">{" " + legislator.first_name}</h1>
                <span>{ legislator.middle_name ? <h1 className="legislatorName">{legislator.middle_name}</h1> : <span></span>} </span>
                 <h1 className="legislatorName">{" " + legislator.last_name}</h1>
                 <span>{ legislator.suffix ? <h1 className="legislatorName">{legislator.suffix}</h1> : <span></span>} </span>
               </div>
               <div className="col-md-6">
               <p>{legislator.roles[0].title}</p>
               <span>{ legislator.roles[0].district ? <span> <p><strong>District:</strong> {legislator.roles[0].district}</p></span> : <span></span>} </span>
               <span>  <p> <strong>DOB:</strong> {legislator.date_of_birth}</p></span>
               <span><p> <strong>Party:</strong> {legislator.party}</p> </span>
               <span><p> <strong>Office Period:</strong> {legislator.roles[0].start_date + " to " + legislator.roles[0].end_date}</p></span>
               <span> <p><strong>Missed Votes %:</strong> {legislator.roles[0].missed_votes_pct }</p> </span>
               <span><p> <strong>Most Recent Vote:</strong>{legislator.most_recent_vote}</p></span>
               <h3>Contact/Social Media</h3>
               <span>{ legislator.roles[0].office ?   <p >{legislator.roles[0].office}</p> : <span></span>} </span>
               <span>{ legislator.roles[0].phone ? <p >{legislator.roles[0].phone}</p> : <span></span>} </span>
               <span>{ legislator.twitter_account ? <a href={"http://twitter.com/"+legislator.twitter_account} target="_blank">Twitter Account </a> : <span></span>} </span>
               <span>{ legislator.facebook_account ? <a href={"http://facebook.com/"+legislator.facebook_account} target="_blank">Facebook</a> : <span></span>} </span>
               <span>{ legislator.youtube_account ? <a href={"http://youtube.com/"+legislator.youtube_account} target="_blank">Youtube</a> : <span></span>} </span>

               </div>
             </div>
             </span>
             : <h1>Loading</h1>}
             </span>

             <div class="jumbotron"><h3 className="header">Articles</h3>
              {this.state.articles && this.state.articles.length > 2 ? this.getArticles() : ''}
             </div>
         </div>
    )
  }


}

export default LegislatorShow
