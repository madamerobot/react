import React, { Component } from 'react';

class Places extends Component {
	
	render(){

		const spotList = this._showList();
		
		return (
			<div>
				<h3>These are your summer spots:</h3>
				<h2>It is btw {this.props.temperature}°C</h2>
				<ul>{spotList}</ul>
			</div>
		);
	}

	_showList(){

		const places = this.props.Places;
		// console.log("Places props: "+JSON.stringify(places));

		return places.map((places) => {
			return (
			<li key={places.id}>{places.properties.Naam_locatie}</li>
			);
		});
	}
}

export default Places;