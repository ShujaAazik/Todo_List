/** @format */

import React, { useState } from 'react';
import reactDom from 'react-dom';
import './App.css';

function App() {
	const [text, setText] = useState('');
	const [list,setList] = useState([]);
	return (
		<div>
			<div className='Input-container'>
				<h1>ToDo List</h1>
				<input type='text' onChange={(e) => {setText(e.target.value)}} value={text} />
				<button onClick={()=>{setList(list.concat(text))}}>Add</button>
			</div>
			<div className='Todo-list-container'><Addtolist value = {list}/></div>
		</div>
	);
}

function Addtolist(props){
	return(
		<ul>
			{
				props.value.map(e => <li>{e.target.value}</li>)
			}
		</ul>
	);
}

export default App;
