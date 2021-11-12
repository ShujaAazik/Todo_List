import React from "react";
import reactDom from "react-dom";


class Todo extends React.Component {
	contructor(props) {
		super(props);
	}
	render() {
    return(
      <h1>Shuja</h1>
    );
  }
}

function App() {
  return (
		<div>
			<h1>ToDo App</h1>
      <input type="text"></input>

		</div>
	);
}



export default App;
