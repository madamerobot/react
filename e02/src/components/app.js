import React, { Component } from 'react';
import Places from './places';
import Tempinfo from './tempinfo';
import DATA from '../sunspots_JSON';
import '../materialize/css/materialize.css';
import '../materialize/css/style.css';

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
				<div className="row">
				</div>
				<div className="col s1">
				</div>
				<div className="range col s3 degreebox">
					<Tempinfo temperature={this.state.temperature} onChange={this.handleChange} />
				</div>
				<div className="col s1">
				</div>
				<div className="col s6 placeslist">
					<Places Places={DATA} temperature={this.state.temperature} />
				</div>
					<div className="col s1">
				</div>
			</div>
		)
	}

}

export default App;