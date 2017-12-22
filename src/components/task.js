import React, {Component} from "react"
import SubTaskList from "../containers/subTaskList.js"
import SubTaskForm from "../components/subTaskForm.js"


export default class Task extends Component{
  constructor(props) {
    super(props)
      this.state = {
        complete: false,
        subTaskList: [],
        isHidden: true
      }

    this.handleCloseTask = this.handleCloseTask.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.toggleHidden = this.toggleHidden.bind(this)
    this.handlesubTask = this.handlesubTask.bind(this)
  }

  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  handleChange() {
    this.setState({
    complete: !this.state.complete
     }, function() {
      console.log(this.state);
     }.bind(this));
   }

  handleCloseTask(){
    this.props.onClose(this.props.id)
  }

  handleRemoveTask(id){
    let array = this.state.subTaskList;
     array = array.filter(function (el, index) {
       return index !== id
     });
    this.setState({subTaskList: array});
   }

 handlesubTask(name) {
   let tmp = this.state.subTaskList;
   tmp.push(name);
   this.setState({subTaskList: tmp})
 }

  render(){
    return(
      <div>
<a href="#" className="list-group-item" onClick={this.toggleHidden}>
      <div className="arrow" style={{display: this.state.subTaskList.length > 0 && this.state.isHidden ? 'inline-block' : 'none'}}></div>
      <div className="arrow_down" style={{display: this.state.subTaskList.length > 0 && !this.state.isHidden ? 'inline-block' : 'none'}}></div>
  </a>
      <div className="checkbox_one">
        <input type="checkbox" checked={this.state.complete} ref="complete" onChange={this.handleChange} />
          <a href="#" className="list-group-item" onClick={this.toggleHidden} style = {{textDecoration: this.state.complete ? 'line-through' : 'none'}}>{this.props.name}</a>
            <div className="after_one"></div>
        </div>
          <label className="round_one" style={{display: this.state.complete ? 'block' : 'none'}}></label>


        <div className="subtask" style={{display: this.state.isHidden ? 'none' : 'block' }}>
          <SubTaskList sublist = {this.state.subTaskList} removeTask = {this.handleRemoveTask} />
          <SubTaskForm newSubTask={this.handlesubTask}/>
        </div>

      </div>
    )
  }
}
