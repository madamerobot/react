import React, { Component } from 'react';

class Places extends Component {
	
	render(){

		const spotList = this._showList();
		
		return (
			<div>
				<h3>These are your summer spots:</h3>
				<ul>{spotList}</ul>
			</div>
		);
	}

	_showList(){

		const places = this.props.Places;
		const newList =[...places.slice(0, this.props.temperature)];

		return newList.map((places) => {
			return (
			<li key={places.id}>{places.properties.Naam_locatie}</li>
			);
		});
	}
}

export default Places;