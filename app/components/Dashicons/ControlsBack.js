const React = require('react');
const IconBase = require('react-icon-base');

export default class ControlsBack extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M2 10l10-6v3.6l6-3.6v12l-6-3.6v3.6z'/>
			</IconBase>
		);
	}
}
