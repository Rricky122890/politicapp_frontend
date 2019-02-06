import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'

class Profile extends Component{
  render(){


  console.log(this.props);
    return(
      <div className="full">{this.props.user? <div className="row"><div className="col-md-6"><h3>{this.props.user.user.username}'s Profile</h3>
       <img className="img-thumbnail" src={this.props.user.user.avatar}/>
      </div> <div className="col-md-6"><p><strong>Bio and Beliefs:</strong><br/>{this.props.user.user.bio}</p></div><div className="jumbotron">
       <h1 className="header">News Feed and Follow Politicians Under Contruction </h1>
      </div></div>
      : <div><h1>Must Be Logged In</h1></div>  }</div>
    )
  }
}

export default Profile
