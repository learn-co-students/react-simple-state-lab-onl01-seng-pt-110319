import React from 'react';

export default class Cell extends React.Component {

	constructor(props) {
		super()
		this.state = 
			{color: props.value}
	}

	handleColorChange = () => {
		const newColor = '#333'
		this.setState({
			color: newColor
		})
	}

	render() {
		return (
			<div className="cell" 
				 style={{backgroundColor: this.state.color}} 
				 onClick={this.handleColorChange}>
			</div>
		)
	}

}