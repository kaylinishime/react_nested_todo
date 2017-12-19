import React, {Component} from "react"

//Components
import Task from "../components/task.js"

export default class ListContainer extends Component{

  constructor(props) {
    super(props)
  }

  render(){
    return(
      <div className="row">
        <div className = "col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
              <div className="list-group">
                <Task />
                </div>
              </div>
          </div>
        </div>
      </div>
    )
  }
}
