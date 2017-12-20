import React, {Component} from "react"

//Components
import Task from "../components/task.js"

export default class ListContainer extends Component{

  constructor(props) {
    super(props)
    this.handleCloseTask = this.handleCloseTask.bind(this)
  }

  render(){
    return(
      <div className="row">
        <div className = "col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
              <div className="list-group">
              {
                  this.props.list.map((value, index) => (
                      <Task
                        key = {index}
                        id = {index}
                        name = {value}
                        onClose = {this.handleCloseTask}
                      />
                  ))
                }
                </div>
              </div>
          </div>
        </div>
      </div>
    )
  }

  handleCloseTask(id){
    this.props.removeTask(id)
  }
}
