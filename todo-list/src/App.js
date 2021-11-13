import React from "react";
import reactDom from "react-dom";
import './App.css';

function App() {
  return (
		<div>
			<div className='Input-container'>
				<h1>ToDo List</h1>
				<input type='text'></input>
				<button>Add</button>
			</div>
			<div className='Todo-list-container'></div>
		</div>
	);
}



export default App;
