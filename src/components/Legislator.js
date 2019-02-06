import React, {Component} from 'react'
import {Route} from 'react-router-dom'

class Legislator extends Component {

state = {
  followed: "not"
}

unfollow = () => {
  this.follow = "no"
  console.log("whoop")
  this.setState({follow: "not"})
  window.location.reload()
}

reload = () => {
  window.location.reload()
}

componentWillReceiveProps(){
  console.log("update");
}

  render(){

    let legislator = this.props.legislator

    // let isfollowing = this.props.follows.map(follow => {
    //     if(this.props.user.user.id == follow.user_id && legislator.id == follow.legislator_id  ){
    //     return  <input type="button" className="btn btn-light" onClick={() => this.props.followLegislator(legislator)} value="Unfollow"/>
    //     }
    //     else{
    //       return  <input type="button" className="btn btn-primary" onClick={() => this.props.followLegislator(legislator)} value="Follow"/>
    //     }
    // })

    let isfollowing = this.props.follows.forEach(follow => {
        if(this.props.user.user.id == follow.user_id && legislator.id == follow.legislator_id  ){
          return this.follow = "yes", this.found = follow
           console.log(follow);
        }
        else{

        }
    })

    console.log(this.props.followed)
  //  this.follow == "yes" ..... for ternary

    return (

      <tr>
      <td> { this.follow == "yes"  ?  <input type="button" className="btn btn-light" onClick={() => {this.props.unfollowLegislator(this.found); this.unfollow()} } value="Unfollow"/> : <input type="button" className="btn btn-primary" onClick={() => {this.props.followLegislator(legislator); this.reload()} }  value="Follow"/>} </td>
      <td>{legislator.title}</td>
      <td><Route render={({history}) => ( <a href='#' onClick={() => { this.props.showLegislator(legislator); history.push('/legislatorshow') }}>
      {legislator.first_name}
    </a>
      )} /></td>
      <td>{legislator.last_name}</td>
      <td>{legislator.middle_name}</td>
      <td>{legislator.party}</td>
      <td>{legislator.state}</td>
      <td>{legislator.district}</td>
    </tr>)
  }
}

export default Legislator
