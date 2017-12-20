import React, {Component} from "react"
import SubTask from "../components/subTask.js"


export default class SubTaskList extends Component{

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
                  this.props.sublist.map((value, index) => (
                      <SubTask
                        key = {index}
                        id = {index}
                        subname = {value}
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
