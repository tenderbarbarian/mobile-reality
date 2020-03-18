import React, { Component } from 'react';
import { connect } from 'react-redux';
class HouseForm extends Component {
	handleSubmit = (e) => {
		e.preventDefault();
		const address = this.getAddress.value;
		const owner = this.getOwner.value;
		const price = this.getPrice.value;
		const area = this.getArea.value;
		const data = {
			address,
			owner,
			price,
			area
		};
		console.log(data);
		this.props.dispatch({
			type: 'ADD_HOUSE',
			data
		});
		this.getAddress.value = '';
		this.getOwner.value = '';
	};
	render() {
		return (
			<div>
				<h1>Create House</h1>
				<form onSubmit={this.handleSubmit}>
					<input
						required
						type="text"
						ref={(input) => (this.getAddress = input)}
						placeholder="Enter House Address"
					/>
					<br />
					<br />
					<input
						required
						type="text"
						ref={(input) => (this.getOwner = input)}
						placeholder="Enter House Owner"
					/>
					<br />
					<br />
					<input
						required
						type="number"
						ref={(input) => (this.getPrice = input)}
						placeholder="Enter House Price"
					/>
					<br />
					<br />
					<input
						required
						type="text"
						ref={(input) => (this.getArea = input)}
						placeholder="Enter House Area"
					/>
					<br />
					<br />
					<button>Create a new house</button>
				</form>
			</div>
		);
	}
}

export default HouseForm;
// export default connect()(HouseForm);
