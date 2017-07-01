import React, { Component } from 'react';

class Slider extends Component {
	
	render() {
		return(
			<div>
				<input id="slider" type="range" min="0" max="500" onChange={this._change()} />
				<p value={this._change()}></p>
			</div>
		)
	}

	_change(){
     return document.querySelector('#slider').value;
 	}
}

export default Slider;