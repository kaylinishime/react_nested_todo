import React, {Component} from "react"

export default class SubTaskForm extends Component {

  constructor(props){
    super(props)
    this.state = {
      taskTitle: "",
      placeholder: "+ Add Subtask"
    }
    this.handlesubTask = this.handlesubTask.bind(this)
  }

  checkKey(e) {
    var keyCode = e.which || e.keyCode;
    if(keyCode == 13) {
      if(this.state.taskTitle.trim() !== "") {
        this.props.newSubTask(this.state.taskTitle)
        this.setState({taskTitle: '', placeholder: "+ Add Subtask"})
      }
    }
  }

  handlesubTask(e) {
    let name = e.target.value
    if(this.state.taskTitle.trim() !== "") {
    this.props.newSubTask(this.state.taskTitle)
    this.setState({taskTitle: '', placeholder: "+ Add Subtask"})
  }
}

  updateTaskTitle(e) {
    this.setState({taskTitle: e.target.value})
  }

  placeHolder(e) {
    this.setState({placeholder: ''})
  }
  blurOut(e) {
    this.setState({placeholder: '+ Add Subtask'})
  }

  render(){
    return (
            <div className = "subTaskForm_outer">
                <div className="row">
                    <div className="col-md-7">
                        <input type="text" className="form-control" placeholder={this.state.placeholder} onChange = { e => this.updateTaskTitle(e)} value={this.state.taskTitle} onKeyPress = {e => this.checkKey(e) } onFocus={e => this.placeHolder(e)} onBlur = {e =>
                          this.blurOut(e)} />
                    </div>
                </div>
            </div>
    )
}



}
