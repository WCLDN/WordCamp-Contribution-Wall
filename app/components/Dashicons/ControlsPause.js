const React = require('react');
const IconBase = require('react-icon-base');

export default class ControlsPause extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M5 16v-12h3v12h-3zM12 4h3v12h-3v-12z'/>
			</IconBase>
		);
	}
}
