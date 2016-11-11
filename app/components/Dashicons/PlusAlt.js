const React = require('react');
const IconBase = require('react-icon-base');

export default class PlusAlt extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M15.8 4.2c3.2 3.21 3.2 8.39 0 11.6-3.21 3.2-8.39 3.2-11.6 0-3.2-3.21-3.2-8.39 0-11.6 3.21-3.2 8.39-3.2 11.6 0zM11.5 15.5v-4h4v-3h-4v-4h-3v4h-4v3h4v4h3z'/>
			</IconBase>
		);
	}
}
