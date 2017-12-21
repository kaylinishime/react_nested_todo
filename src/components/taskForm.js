import React, {Component} from "react"

export default class TaskForm extends Component {

  constructor(props){
    super(props)
    this.state = {
      taskTitle: "",
      placeholder: "+ Add Task"
    }
    this.handleAddTask = this.handleAddTask.bind(this)
  }

  checkKey(e) {
    var keyCode = e.which || e.keyCode;
    if(keyCode == 13) {
      if(this.state.taskTitle.trim() !== "") {
        this.props.newTask(this.state.taskTitle)
              this.setState({taskTitle: '', placeholder: "+Add Task"})
      }
    }
  }

  handleAddTask(e) {
    let name = e.target.value
    if(this.state.taskTitle.trim() !== "")
      this.props.newTask(this.state.taskTitle)
      this.setState({taskTitle: '', placeholder: "+Add Task"})
  }

  updateTaskTitle(e) {
    this.setState({taskTitle: e.target.value})
  }

  placeHolder(e) {
    this.setState({placeholder: ''})
  }
  blurOut(e) {
    this.setState({placeholder: '+Add Task'})
  }


  render(){
    return (
      <div className = "taskForm_outer">
        <div className="taskForm_inner_1">
            <input type="text" className="form-control" placeholder={this.state.placeholder} onChange = { e => this.updateTaskTitle(e)} value={this.state.taskTitle} onKeyPress = {e => this.checkKey(e) } onFocus={e => this.placeHolder(e)} onBlur = {e =>
              this.blurOut(e)} />
          </div>
          </div>
        )
      }
    }
