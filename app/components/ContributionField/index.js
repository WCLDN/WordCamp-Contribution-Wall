import React from 'react';
// noinspection JSUnresolvedVariable
import styles from './contribution.css';
import Autocomplete from 'react-autocomplete';

const config = require('../../../config.json');

export default class ContributionField extends React.Component {
	constructor(props) {
		super(props);
	}

	shouldItemRender(state, value) {
		return (
			state.toLowerCase().indexOf(value.toLowerCase()) !== -1
		);
	}

	getItemValue(value) {
		return value;
	}

	handleChange = (e) => {
		this.props.onChange(e.target.value);
	};

	handleSelect = (e) => {
		this.props.onChange(e);
	};

	renderItem(item, isHighlighted) {
		return (
			<div className={isHighlighted ? styles.highlightedItem : styles.item}>
				{item}
			</div>
		);
	}

	getItems() {
		return this.props.team === '' ? [] : config.teams[this.props.team].contributions;
	}

	render() {
		return (
			<div className='form-group'>
				<label htmlFor='contribution'>{this.props.label}</label>
				<Autocomplete
					value={this.props.value}
					wrapperProps={{className: styles.wrapper}}
					inputProps={{name: this.props.name, id: 'contribution', className: 'form-control'}}
					items={this.getItems()}
					getItemValue={this.getItemValue}
					onChange={this.handleChange}
					onSelect={this.handleSelect}
					shouldItemRender={this.shouldItemRender}
					renderItem={this.renderItem}
				/>
			</div>
		);
	}
}

ContributionField.propTypes = {
	team: React.PropTypes.string.isRequired,
	value: React.PropTypes.string.isRequired,
	onChange: React.PropTypes.func.isRequired,
	name: React.PropTypes.string,
	label: React.PropTypes.string
};

ContributionField.defaultProps = {
	name: 'Contribution',
	label: 'Contribution'
};
