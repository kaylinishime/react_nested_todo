import React, {Component} from "react"

export default class TaskForm extends Component {

  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className = "row">
        <div className = "col-md-6 col-md-offset-3">
            <div style = {{margin:"20px"}}>
                <div className="row">
                    <div className="col-md-7">
                        <input type="text" className="form-control" placeholder="your task"/>
                    </div>
                    <div className="col-md-4">
                        <button className="btn btn-primary"> Create New Task </button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
