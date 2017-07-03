import React, { Component } from 'react';

class Tempinfo extends Component {

	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event){
		const value = event.target.value;
		console.log("Value: "+value);
		this.props.onChange(value);
	}
	
	render(){
		return(
			<div>
				<h2>It is</h2>
				<h1>{this.props.temperature}°C</h1>
					<input type="range" min="0" max="45" value={this.props.temperature} onChange={this.handleChange}/>
			</div>
		);
	}
}

export default Tempinfo;