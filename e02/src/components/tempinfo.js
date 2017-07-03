import React, { Component } from 'react';

class Tempinfo extends Component {
	
	constructor(props) {
	    super(props);
	    this.state = {value: "15"};

	    this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
    	this.setState({value: event.target.value});
  	}

  	handleSubmit(event) {
  		event.preventDefault();
  		console.log("Click");
  	}

	render(){
		return(
			<div>
				<h2>It is</h2>
				<h1>{this.state.value}°C</h1>
				<form onSubmit={this.handleSubmit}>
					<input type="range" min="0" max="40" value={this.state.value} onChange={this.handleChange}/>
					<p>
					<input type="submit" value="Show Summerspots" />
					</p>
				</form>
			</div>
		);
	}
}

export default Tempinfo;