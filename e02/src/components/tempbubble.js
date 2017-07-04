import React, { Component } from 'react';

class Tempbubble extends Component {

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
		
		const degrees = this.props.temperature+'°C';

		return(
			<div className="degreebubble">{degrees}</div>
		);
	}
}

export default Tempbubble;