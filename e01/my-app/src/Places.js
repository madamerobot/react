import React, { Component } from 'react';

class Places extends Component {
	render() {

	const data = this.props.Places;
	console.log(data);

	const spots = this._showSpots();

		return(
			<div>
				<h3>Amsterdam Zonnenplekken:</h3>
				<button>Load summerspots</button>
				<ul>
					{spots}
				</ul>
			</div>
		)
	}

	_showSpots(){
		console.log("data: "+this.data);
		return data.map((data) => {
			return (
				<li key={data.id}>{data.properties.Naam_locatie}</li>
			);
		});
	}
}

export default Places;
