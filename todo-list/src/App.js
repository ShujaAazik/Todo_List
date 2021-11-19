/** @format */

import React, { useState, useEffect } from 'react';
import reactDom from 'react-dom';
import './App.css';

function App() {
	const [text, setText] = useState('');
	const [list,setList] = useState([]);

	useEffect(() => {
		console.log("Shuja")
	}, [list,text]);

	return (
		<div>
			<div className='Input-container'>
				<h1>ToDo List</h1>
				<input type='text' onChange={(e) => {setText(e.target.value)}} value={text} />
				<button onClick={()=>{setList(list.concat({key: new Date().getUTCDate(), value: text}));setText("");}}>Add</button>
			</div>
			<div className='Todo-list-container'><Addtolist value = {list}/></div>
		</div>
	);
}

function Addtolist(props){
	return (
		<ul>
			<div className='Todo-list-element'>
				{props.value.map((e) => (
					<li>
						{e.value}
						<button onClick={(e) => props.value.splice(props.value.indexOf(e))}>
							X
						</button>
					</li>
				))}
			</div>
		</ul>
	);
}

export default App;
