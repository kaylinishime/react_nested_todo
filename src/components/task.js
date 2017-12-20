import React, {Component} from "react"
import SubTaskList from "../containers/subTaskList.js"

export default class Task extends Component{
  constructor(props) {
    super(props)
      this.state = {
        complete: false,
        subTaskList: []
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
      <div>
        <a href="#" className="list-group-item">
        <input
            type="checkbox"
            checked={this.state.complete}
            ref="complete"
            onChange={this.handleChange}
          />task 1
            <i style = {{float:"right"}} className="glyphicon glyphicon-remove"></i>
        </a>

        <SubTaskList sublist = {this.state.subTaskList} />
      </div>
    )
  }

  handleCloseTask(){
  this.props.onClose(this.props.id)
}


}
