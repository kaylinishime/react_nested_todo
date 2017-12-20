import React, {Component} from "react"
import SubTaskList from "../containers/subTaskList.js"
import SubTaskForm from "../components/subTaskForm.js"


export default class Task extends Component{
  constructor(props) {
    super(props)
      this.state = {
        complete: false,
        subTaskList: [],
        isHidden: true
      }

    this.handleCloseTask = this.handleCloseTask.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.toggleHidden = this.toggleHidden.bind(this)
    this.handlesubTask = this.handlesubTask.bind(this)
  }

  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
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
        <a href="#" className="list-group-item" onClick={this.toggleHidden}>
        <input
            type="checkbox"
            checked={this.state.complete}
            ref="complete"
            onChange={this.handleChange}
          />{this.props.name}
            <i style = {{float:"right"}} className="glyphicon glyphicon-remove"></i>
        </a>
       <div className="subtask" style={{display: this.state.isHidden ? 'none' : 'block' }}>
        <SubTaskList sublist = {this.state.subTaskList} removeTask = {this.handleRemoveTask} />
        <SubTaskForm newSubTask={this.handlesubTask}/>
      </div>
      </div>
    )
  }



  handleCloseTask(){
  this.props.onClose(this.props.id)
}

handleRemoveTask(id){
  let array = this.state.subTaskList;
    /* Remove selected value from array */
  array = array.filter(function (el, index) {
    return index !== id
  });
  this.setState({subTaskList: array});
}


handlesubTask(name) {
  let tmp = this.state.subTaskList;
  tmp.push(name);
  this.setState({subTaskList: tmp})
}


}
