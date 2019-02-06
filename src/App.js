import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import LogSign from './components/LogSign'
import LegislatorContainer from './containers/LegislatorContainer'
import { BrowserRouter } from 'react-router-dom';
import {Route} from 'react-router-dom'
import LegislatorShow from './components/LegislatorShow'
import Profile from './components/Profile'

class App extends Component {
  state = {
    legislators: [],
    user: null,
    showLegislator: {},
    follows: [],
    all: []
  }

  componentDidMount(){
    // fetch("http://localhost:3000/api/v1/legislators")
    // .then(resp => resp.json())
    // .then(json => {this.setState({legislators: json}) })

    fetch("http://localhost:3000/api/v1/legislators")
    .then(resp => resp.json())
    .then(json => {

      fetch('http://localhost:3000/api/v1/follows')
      .then(resp => resp.json())
      .then( data => {this.setState({legislators: json, follows: data, all: json }) })
      //console.log(json);
    })


    // fetch('http://localhost:3000/api/v1/follows')
    // .then(resp => resp.json())
    // .then(data => console.log(data))

    let token = localStorage.getItem("token");
   console.log(token);
   if (token) {
     fetch("http://localhost:3000/api/v1/profile", {
       headers: {
         "Content-Type": "application/json",
         Accepts: "application/json",
         Authorization: token
       }
     })
       .then(resp => resp.json())
       .then(resp => {
         console.log("CDMount", resp);
         this.setState({
           user: resp
         });
       });
   } else {
     console.log("Sike!");
   }
   //Fetching follows

  }

  login = (event, userInfo) => {
    console.log(userInfo);
    event.preventDefault()
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json"
      },
      body: JSON.stringify({
        user: userInfo
      })
    })
      .then(resp => resp.json())
      .then(resp => {
        localStorage.setItem("token", resp.jwt);
        this.setState({
          user: resp.user
        });
      });

  };

  createUser = (event, obj) => {
    event.preventDefault()
    fetch("http://localhost:3000/api/v1/users", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
     Accept: 'application/json'
   },
   body: JSON.stringify({
     user:{
       username: obj.username,
      password: obj.password,
      bio: obj.bio,
      avatar: obj.img,
     }
   })
 })
.then(resp => resp.json())

}

showLegislator = (legislator) => {
  this.setState({showLegislator: legislator})
}

followLegislator = (obj) => {
   console.log(obj);
   fetch('http://localhost:3000/api/v1/follows', {
 method: 'POST',
 headers: {
   'Content-Type': 'application/json',
   Accept: 'application/json'
 },
 body: JSON.stringify({

     username: this.state.user,
     legislator_id:     obj.id,
     legislator_first_name: obj.first_name,
     legislator_last_name: obj.last_name,


 })
})
 .then(res => res.json())
 .then(obj =>{
   console.log(obj)
 })
 }

 unfollowLegislator = (obj) => {
   console.log(obj);
   fetch(`http://localhost:3000/api/v1/follows/${obj.id}`, {
      method: 'DELETE',
      headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
      },
      body: JSON.stringify({
      id: obj.id
      })
      })
      .then(resp => resp.json)


 }

 filterLegislator = (event) => {

      if (event.target.value == ""){
        this.setState({legislators: this.state.all})
      }

      else  {
         let filtered = this.state.all.filter(legislator => {
         return  legislator.first_name.toLowerCase().includes(event.target.value) || legislator.last_name.toLowerCase().includes(event.target.value) || legislator.title.toLowerCase().includes(event.target.value) || legislator.state.toLowerCase().includes(event.target.value)
         }
        )
        this.setState({legislators: filtered})
      }


 }



  render() {
console.log(this.state)

    return (
      <BrowserRouter>
       <div>
        <NavBar user={this.state.user} filterLegislator={this.filterLegislator} />
        <Route exact path="/" render={routerProps => <Profile {...routerProps} user={this.state.user} />} />
        <Route path="/LegislatorShow" render={routerProps => <LegislatorShow {...routerProps} showLegislator={this.state.showLegislator} />} />
        <Route path="/Login" render={routerProps => <LogSign {...routerProps} user={this.state.user} login={this.login} createUser={this.createUser}/>} />
        <Route path="/legislators" render={routerProps => <LegislatorContainer {...routerProps} showLegislator={this.showLegislator} legislators={this.state.legislators} followLegislator={this.followLegislator} unfollowLegislator={this.unfollowLegislator} user={this.state.user} follows={this.state.follows}   />} />
       </div>
      </BrowserRouter>
    );
  }
}

export default App;
