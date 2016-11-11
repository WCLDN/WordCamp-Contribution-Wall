const React = require('react');
const IconBase = require('react-icon-base');

export default class ArrowUp extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M7 13l4.030-6 3.97 6h-8z'/>
			</IconBase>
		);
	}
}
