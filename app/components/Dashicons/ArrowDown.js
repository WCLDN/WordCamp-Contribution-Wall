const React = require('react');
const IconBase = require('react-icon-base');

export default class ArrowDown extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M15 8l-4.030 6-3.97-6h8z'/>
			</IconBase>
		);
	}
}
