const React = require('react');
const IconBase = require('react-icon-base');

export default class Sort extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M11 7h-10l5 7zM9 14h10l-5-7z'/>
			</IconBase>
		);
	}
}
