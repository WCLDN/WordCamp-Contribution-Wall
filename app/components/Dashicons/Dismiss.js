const React = require('react');
const IconBase = require('react-icon-base');

export default class Dismiss extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8zM15 13l-3-3 3-3-2-2-3 3-3-3-2 2 3 3-3 3 2 2 3-3 3 3z'/>
			</IconBase>
		);
	}
}
