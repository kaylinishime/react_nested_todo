import React, {Component} from "react"

export default class SubTask extends Component{
  constructor(props) {
    super(props)
  }


  render(){
    return(
      <div>
      <a href="#" className="list-group-item">
      <input
          type="checkbox"
          ref="complete"
        />task 2
          <i style = {{float:"right"}} className="glyphicon glyphicon-remove"></i>
      </a>
      </div>
    )
  }
}
