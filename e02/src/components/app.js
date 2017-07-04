import React, { Component } from 'react';
import Places from './places';
import Tempbubble from './tempbubble';
import Tempslider from './tempslider';
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
					<div className="col s12 header">
						<h3 className="headline"><span role="img">🍦</span>Amsterfun<span role="img">🍦</span></h3>
					</div>

					<div className="row">

						<div className="col s1"></div>

						<div className="range col s3 degreebox">
							<Tempbubble temperature={this.state.temperature} onChange={this.handleChange} />
							<Tempslider temperature={this.state.temperature} onChange={this.handleChange} />
						</div>
						
						<div className="col s1"></div>					
			
						<div className="col s6 placeslist">
							<Places Places={DATA} temperature={this.state.temperature} />
						</div>

						<div className="col s1"></div>

					</div>
				</div>
		)
	}

}

export default App;