import React, {Component} from 'react'

class LogSign extends Component{

  state = {
    username: "",
    password: "",
    logrender: "login",
    bio: "",
    img: ""
  }

createUserHandler = (event) => {
  this.setState({[event.target.name]: event.target.value })
}

loginHandler = (event) => {
  this.setState({[event.target.name]: event.target.value })
}

logout = () => {
 localStorage.removeItem("token")
 console.log(localStorage.length);

}

  render(){



    return(
      <div className="row">
      <div className="action-sizing col-md-6">
        <h3>Know What Your Government Is Up To With PoliticApp </h3>
        <p><strong>Get Live News Feeds</strong> on your politicians and policies. </p>
        <p><strong>See What Laws</strong> are being passed. </p>
        <p><strong>Contact and Connect</strong> with your politicians. </p>
      </div>

    <div className="form-sizing col-md-6">
      { this.state.logrender == "sign up" ?
      <span className="form-group">
      <h2 className="header">Create an Account</h2>
      <form  onSubmit={(event) => {this.props.createUser(event, this.state); this.setState({username: "", password: ""})}}>
       <input className="form-control" type="text" placeholder="Enter Username"  name="username" value={this.state.username}  onChange={this.createUserHandler}/>
        <br/>
       <input className="form-control" type="password" placeholder="Create Password" name="password" value={this.state.password} onChange={this.createUserHandler} />
       <input className="form-control" type="text" placeholder="Tell us about Yourself" name="bio" value={this.state.bio} onChange={this.createUserHandler} />
       <input className="form-control" type="text" placeholder="Add an Image" name="img" value={this.state.img} onChange={this.createUserHandler} />
       <input type="submit" className="btn btn-primary" value="Sign Up"/>
      </form>
      <p>Or You Can</p>
      <button className="btn " onClick={() => this.setState({logrender: "login"})}>Go to Login</button>
      </span> :
      <span >
      <h2 className="header">Login</h2>
      <form onSubmit={(event) => {this.props.login(event, this.state); this.setState({username: "", password: ""})}}>
       <input className="form-control" type="text" placeholder="Enter Username"  name="username" value={this.state.username}  onChange={this.loginHandler}/>
       <br/>
       <input className="form-control" type="password" placeholder="Enter Password" name="password" value={this.state.password} onChange={this.loginHandler} />
       <input type="submit" className="btn btn-primary" value="Log In"/>
      </form>
      <p>Or You Can</p>
      <button className="btn " onClick={() => {this.setState({logrender: "sign up"})}}>Create Account</button>
     <button className="btn btn-danger" onClick={this.logout}>Logout</button>
     </span>
        }
    </div>
    </div>
    )
  }

}

export default LogSign
