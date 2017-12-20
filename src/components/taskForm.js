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
      <div className = "row">
        <div className = "col-md-6 col-md-offset-3">
            <div>
                <div className="row">
                    <div className="col-md-7">
                        <input type="text" className="form-control" placeholder="your task" onChange = { e => this.updateTaskTitle(e)} value={this.state.taskTitle} onKeyPress = {e => this.checkKey(e)} />
                    </div>
                    <div className="col-md-4">
                        <button className="btn btn-primary" onClick = {this.handleAddTask}> Create New Task </button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
