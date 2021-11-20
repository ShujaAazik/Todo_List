/** @format */

import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
	const [text, setText] = useState('');
	const [list, setList] = useState([]);

	useEffect(() => {
		console.log('Shuja');
	});

	return (
		<div>
			<div className='Input-container'>
				<h1>ToDo List</h1>
				<input
					type='text'
					onChange={(e) => {
						setText(e.target.value);
					}}
					value={text}
				/>
				<button
					onClick={() => {
						if (text.length > 0) {
							setList(
								list.concat({ key: new Date().getUTCDate(), value: text })
							);
						}
						setText('');
					}}>
					Add
				</button>
			</div>
			<div className='Todo-list-container'>
				<Addtolist value={list} />
			</div>
		</div>
	);
}

function Addtolist(props) {
	return (
		<ul>
			<div className='Todo-list-element'>
				{props.value.map((todo, index) => (
					<li key={index}>
						{todo.value}
						<button
							onClick={() => props.value.splice(props.value.indexOf(index))}>
							X
						</button>
					</li>
				))}
			</div>
		</ul>
	);
}

export default App;
