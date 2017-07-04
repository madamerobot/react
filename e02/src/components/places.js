import React, { Component } from 'react';

class Places extends Component {
	
	render(){

		const spotList = this._showList();
		
		return (
			<div>
				<p>
					<h3 className="headline">🍦Your summer spots🍦</h3>
				</p>
				<p>{spotList}</p>
			</div>
		);
	}

	_showList(){

		const places = this.props.Places;
		const newList =[...places.slice(0, this.props.temperature)];

		return newList.map((places) => {
			return (
			<div className="placesdetail">
				<p key={places.id}>{places.properties.Naam_locatie}</p>
			</div>
			);
		});
	}
}

export default Places;