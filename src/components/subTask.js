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
            checked={this.state.complete}
            ref="complete"
            onChange={this.handleChange}
          />{this.props.name}
            <i style = {{float:"right"}} className="glyphicon glyphicon-remove"></i>
        </a>
      </div>
    )
  }
}
