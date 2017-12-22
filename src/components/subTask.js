import React, {Component} from "react"

export default class SubTask extends Component{
  constructor(props) {
    super(props)

    this.state = {
      complete: false
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange() {
    this.setState({
       complete: !this.state.complete // flip boolean value
     }, function() {
       console.log(this.state);
     }.bind(this))
   }

  render(){
    return(
      <div>
        <a href="#" className="list-group-item"></a>
          <div className="checkbox_two">
            <input
                type="checkbox"
                checked={this.state.complete}
                ref="complete"
                onChange={this.handleChange}
              /><a style = {{textDecoration: this.state.complete ? 'line-through' : 'none'}}>{this.props.subname}</a>
          <label className="round_two" style={{display: this.state.complete ? 'block' : 'none'}}></label>
            </div>
          <div className="after_two"></div>
      </div>
    )
  }
}
