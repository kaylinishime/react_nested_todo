import React, {Component} from "react"
import SubTask from "../components/subTask.js"


export default class SubTaskList extends Component{

  constructor(props) {
    super(props)
    this.handleCloseTask = this.handleCloseTask.bind(this)
  }

  handleCloseTask(id){
    this.props.removeTask(id)
  }

  render(){
    return(
      <div className="list-group-two">
        {
          this.props.sublist.map((value, index) => (
            <SubTask
              key = {index}
              id = {index}
              subname = {value}
              onClose = {this.handleCloseTask} />
            ))
         }
      </div>
    )
  }
}
