import React from 'react';
import ReactDOM from 'react-dom';
import TaskForm from "./components/taskForm.js"
import ListContainer from "./containers/listContainer.js"


const title = 'react test';

/* todo app container */
class App extends React.Component {

	constructor(props){
		super(props)

    this.state = {
      taskList: []
    }

    this.handleAddTask = this.handleAddTask.bind(this)
	}

  render() {
    return (
      <div>
        <TaskForm newTask={this.handleAddTask} />
        <ListContainer
          list = {this.state.taskList}
          removeTask = {this.handleRemoveTask}
          />
      </div>
    )
  }

  handleRemoveTask(id){
    let array = this.state.taskList;
      /* Remove selected value from array */
    array = array.filter(function (el, index) {
      return index !== id
    });
    this.setState({taskList: array});
}

handleAddTask(name) {
  let tmp = this.state.taskList;
  tmp.push(name);
  this.setState({taskList: tmp})
}

}


ReactDOM.render(
   <App />,
  document.getElementById('app')
);
