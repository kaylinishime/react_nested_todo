import React, {Component} from "react"

export default class Task extends Component{
  constructor(props) {
    super(props)
  }

  render(){
    return(
        <a href="#" className="list-group-item">Dapibus ac facilisis in
            <i style = {{float:"right"}} className="glyphicon glyphicon-remove"></i>
        </a>
    )
  }
}
