import React, { Component } from 'react';

class Places extends Component {
	
	constructor() {
		super();

		this.state = {
			showSpots: false
		};
	}

	render() {
	const spots = this._showSpots();
	let spotList;
	if (this.state.showSpots){
		spotList = <li>{spots}</li>
	}
		return(
			<div>
				<h3>Amsterdam Zonnenplekken:</h3>
				<button onClick={this._handleClick.bind(this)}>Load summerspots</button>
				<ul>
					{spotList}
				</ul>
			</div>
		)
	}

	_handleClick() {
		this.setState({
			showSpots: !this.state.showSpots
		});
	}

	_showSpots(){
		
		const data = this.props.Places;
		console.log(data);

		return data.map((data) => {
			return (
				<li key={data.id}>{data.properties.Naam_locatie}</li>
			);
		});
	}
}

export default Places;
