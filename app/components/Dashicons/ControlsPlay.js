const React = require('react');
const IconBase = require('react-icon-base');

export default class ControlsPlay extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M5 4l10 6-10 6v-12z'/>
			</IconBase>
		);
	}
}
