import React, {Component} from "react"

export default class SubTask extends Component{
  constructor(props) {
    super(props)

    this.state = {
      complete: false
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange() {
    this.setState({
       complete: !this.state.complete // flip boolean value
     }, function() {
       console.log(this.state);
     }.bind(this));
   }

  render(){
    return(
      <div>
        <a href="#" className="list-group-item">
        <input
            type="checkbox"
            checked={this.state.complete}
            ref="complete"
            onChange={this.handleChange}
          />{this.props.subName}
            <i style = {{float:"right"}} className="glyphicon glyphicon-remove"></i>
        </a>
      </div>
    )
  }
}
