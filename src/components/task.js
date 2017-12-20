import React, {Component} from "react"

export default class Task extends Component{
  constructor(props) {
    super(props)
      this.state = {
        complete: false
      }

    this.handleCloseTask = this.handleCloseTask.bind(this)
  }
  handleChange = () => {
    this.setState({
       complete: !this.state.complete // flip boolean value
     }, function() {
       console.log(this.state);
     }.bind(this));
   }

  render(){
    return(
        <a href="#" className="list-group-item">
        <input
            type="checkbox"
            checked={this.state.complete}
            ref="complete"
            onChange={this.handleChange}
          />task 1
            <i style = {{float:"right"}} className="glyphicon glyphicon-remove"></i>
        </a>
    )
  }

  handleCloseTask(){
  this.props.onClose(this.props.id)
}


}
