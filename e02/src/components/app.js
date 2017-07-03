import React, { Component } from 'react';
import Places from './places';
import Tempinfo from './tempinfo';
import DATA from '../sunspots_JSON';
import '../css/style.css';

class App extends Component {

	constructor(props){		
		super(props);
		this.state = {temperature: '5'};
	    this.handleChange = this.handleChange.bind(this);
	}

	handleChange(temperature) {
    	this.setState({temperature: temperature});
  	}

	render() {
		return (
			<div>
				<div className="tempinfo">
					<Tempinfo temperature={this.state.temperature} onChange={this.handleChange} />
				</div>
				<div className="places">
					<Places Places={DATA} temperature={this.state.temperature} />
				</div>
			</div>
		)
	}

}

export default App;