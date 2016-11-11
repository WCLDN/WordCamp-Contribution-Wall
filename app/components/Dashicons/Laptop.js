const React = require('react');
const IconBase = require('react-icon-base');

export default class Laptop extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M3 3h14c0.6 0 1 0.4 1 1v10c0 0.6-0.4 1-1 1h-14c-0.6 0-1-0.4-1-1v-10c0-0.6 0.4-1 1-1zM16 5h-12v8h12v-8zM13 6h-8v4zM19 17v-1h-18v1c0 0.6 0.5 1 1.1 1h15.8c0.6 0 1.1-0.4 1.1-1z'/>
			</IconBase>
		);
	}
}
