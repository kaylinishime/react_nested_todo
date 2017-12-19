import React from 'react';
import ReactDOM from 'react-dom';
import TaskForm from "./components/taskForm.js"
import ListContainer from "./containers/listContainer.js"


const title = 'react test';

/* todo app */
class App extends React.Component {

	constructor(props){
		super(props)
	}

  render() {
    return (
      <div>
        <TaskForm />
        <ListContainer />
      </div>
    )
  }
}


ReactDOM.render(
   <App />,
  document.getElementById('app')
);
