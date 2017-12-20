import React, {Component} from "react"

export default class SubTaskForm extends Component {

  constructor(props){
    super(props)
    this.state = {
      taskTitle: ""
    }
    this.handleAddTask = this.handleAddTask.bind(this)
  }

  render(){
    return (
      <div className = "row">
        <div className = "col-md-6 col-md-offset-3">
            <div style = {{margin:"20px"}}>
                <div className="row">
                    <div className="col-md-7">
                        <input type="text" className="form-control" placeholder="your task sub" onChange = { e => this.updateTaskTitle(e)} value={this.state.taskTitle} onKeyPress = {e => this.checkKey(e)} />
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
}

    checkKey(e) {
      var keyCode = e.which || e.keyCode;
      if(keyCode == 13) {
        if(this.state.taskTitle.trim() !== "") {
          this.props.subnewTask(this.state.taskTitle)
        }
      }
    }

    handleAddTask(e) {
      let name = e.target.value
      if(this.state.taskTitle.trim() !== "")
        this.props.subnewTask(this.state.taskTitle)
    }

    updateTaskTitle(e) {
      this.setState({taskTitle: e.target.value})
    }

}
