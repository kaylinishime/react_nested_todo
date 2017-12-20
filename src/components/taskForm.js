import React, {Component} from "react"

export default class TaskForm extends Component {

  constructor(props){
    super(props)
    this.state = {
      taskTitle: ""
    }
    this.handleAddTask = this.handleAddTask.bind(this)
  }

  checkKey(e) {
    var keyCode = e.which || e.keyCode;
    if(keyCode == 13) {
      if(this.state.taskTitle.trim() !== "") {
        this.props.newTask(this.state.taskTitle)
      }
    }
  }

  handleAddTask(e) {
    let name = e.target.value
    if(this.state.taskTitle.trim() !== "")
      this.props.newTask(this.state.taskTitle)
  }

  updateTaskTitle(e) {
    this.setState({taskTitle: e.target.value})
  }

  render(){
    return (
      <div className = "taskForm_outer">
        <div className="taskForm_inner_1">
            <input type="text" className="form-control" placeholder="Your Task" onChange = { e => this.updateTaskTitle(e)} value={this.state.taskTitle} onKeyPress = {e => this.checkKey(e)} />
          </div>
            <div className="taskForm_inner_2">
              <button className="btn btn-primary" onClick = {this.handleAddTask}>Add Task </button>
            </div>
          </div>
        )
      }
    }
