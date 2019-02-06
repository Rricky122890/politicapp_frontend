import React, {Component} from 'react'
import {connect} from 'react-redux'
import Legislator from '../components/Legislator'

class LegislatorContainer extends Component{

  render(){
  // Orginal map
  let mappedLegislators = this.props.legislators.map(legislator => {
       return <Legislator  key={legislator.id} follows={this.props.follows} user={this.props.user} showLegislator={this.props.showLegislator} followLegislator={this.props.followLegislator} unfollowLegislator={this.props.unfollowLegislator} legislator={legislator}/>
   } )

 //Nested map
 // let mappedLegislators = this.props.legislators.map(legislator => {
 // 
 //   this.props.follows.forEach(follow => {
 //       if(this.props.user.user.id == follow.user_id && legislator.id == follow.legislator_id  ){
 //          return <Legislator  followed={"yes"}  follow={follow} key={legislator.id} follows={this.props.follows} user={this.props.user} showLegislator={this.props.showLegislator} followLegislator={this.props.followLegislator} unfollowLegislator={this.props.unfollowLegislator} legislator={legislator}/>
 //
 //
 //       }
 //       else{
 //            return <Legislator followed={"no"}  key={legislator.id} follows={this.props.follows} user={this.props.user} showLegislator={this.props.showLegislator} followLegislator={this.props.followLegislator} unfollowLegislator={this.props.unfollowLegislator} legislator={legislator}/>
 //       }
 //   })
 //
 //  } )
  //end

console.log(this.props);

    return(
      <table className="table table-striped"><thead>
        <tr>
        <th>
          <h3 className="ui center aligned header">
            Follow
          </h3>
        </th>
        <th>
          <h3 className="ui center aligned header">
            Title
          </h3>
        </th>
          <th>
            <h3 className="ui center aligned header">
              First Name
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Last Name
            </h3>
          </th>
          <th>
          <h3 className="ui center aligned header">
          Middle Name
          </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Party
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              State
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              District
            </h3>
          </th>
        </tr>
        </thead>
        <tbody>
           { mappedLegislators }

      </tbody></table>
    )
  }
}

const mapStateToProps = (state) => {
  return {legislators: state.legislators }
}

export default LegislatorContainer
