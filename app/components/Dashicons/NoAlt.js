const React = require('react');
const IconBase = require('react-icon-base');

export default class NoAlt extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M14.95 6.46l-3.54 3.54 3.54 3.54-1.41 1.41-3.54-3.53-3.53 3.53-1.42-1.42 3.53-3.53-3.53-3.53 1.42-1.42 3.53 3.53 3.54-3.53z'/>
			</IconBase>
		);
	}
}
