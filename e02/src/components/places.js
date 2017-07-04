import React, { Component } from 'react';

class Places extends Component {
	
	render(){

		const spotList = this._showList();
		
		return (
			<div>
				<div>{spotList}</div>
			</div>
		);
	}

	_showList(){

		const places = this.props.Places;
		const newList =[...places.slice(0, this.props.temperature)];

		return newList.map((places) => {
			return (
			<div>
				<div className="placesdetail" key={places.id}>{places.properties.Naam_locatie} </div>
			</div>
			);
		});
	}
}

export default Places;