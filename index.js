import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

//global variable
var storage = [];

//FUNCTION VERSION OF THE BUTTON CLASS
/*function Button(props) {
	return (
		<div className="button">
			<h1>Button name: {props.buttonname}</h1>
		</div>
	);
}*/

//FUNCTION VERSION OF THE GROUP CLASS
/*function Group(props) {
	return (
		<div className="group">
			<h1 id="examplegroup">Hello, {props.groupname}</h1>
			<form id="nameform" action="index.js" onSubmit={formFunc}>
				<input type="text" id="fn" name="firstname" placeholder="name"></input>
				<input type="submit" value="Submit"></input>
			</form>
			<Button buttonname="bleh" />
		</div>
	);
}*/


class Button extends React.Component {
	render() {
		return (
			<div className="button">
				<h1>Button name: {this.props.buttonname}</h1>
			</div>
		);
	}
}

class Ribbon extends React.Component {
	render() {
		return (
			<div className="ribbon">
				<h1>{this.props.ribbonname} is a ribbon.</h1>
				
			</div>
		);
	}
}

function Form() {
	return (
		<form id="nameform" onSubmit={Group.formFunc}>
			<input type="text" id="fn" value={Group.groupname} onChange={Group.handleChange} />
			<input type="submit" value="Submit" />
		</form>
	);
}
//NOTE: comments within JSX are done like this {/**/} 
// parent ui to hold all three pieces, good place to put a SHARED state
//create a state object, whenever its changed, the UI referencing that state will change, QUICKLY
//cross platform

//state: use an initial object when initializing state (if you're doing time and day, initialize with current time of loading website)

//questions: do we have to store every single state? or only the current state


class Group extends React.Component {
	//Class components should always call the base constructor with props --> super(props);
	//if you have props argument in constructor, you can remove the props from when you render the actual Group  
	constructor(props) {
		super(props);
		this.state={
			//initial state 
			groupname: "",
		}
		this.handleChange = this.handleChange.bind(this);
    	this.formFunc = this.formFunc.bind(this);
	};

	handleChange(event) {
		this.setState({
			groupname: event.target.value,
		});
		console.log(event.target.value);
		event.preventDefault();
	}

	formFunc(event){
		//do not mutate state directly, use this.setState
		alert('A name was submitted: ' + this.state.value);
		event.preventDefault();
	}


	render() {
		return (
			/*Everything must be wrapped in an enclosing div*/
			<div>
				<div className="group">
					{/*remove this.props.groupname with this.state.groupname*/}
					<h1 id="examplegroup">Hello, {this.state.groupname}</h1>
					<Form />
					<Button buttonname="bleh" />
				</div>
				
				<Ribbon ribbonname="this" />
			</div>
		);
	}
}


/*function formFunc(event){
	var firstname = document.getElementById("fn").value;
	document.getElementById("examplegroup").innerHTML = "Hello, "+firstname;
	//stops site from reverting back to original form
	event.preventDefault();
}*/

//IMPORTANT: the element property has to be named the same as the thing after props. !!!
//const element = <Group groupname="Sophia" />;
//const element = <Group groupname="Sophia" />;
const element = <Group />; //props (the line above has props) was removed because it's included in the state object initialized in the group Class 

ReactDOM.render(element, document.getElementById("root"));


