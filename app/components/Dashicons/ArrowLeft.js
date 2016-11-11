const React = require('react');
const IconBase = require('react-icon-base');

export default class ArrowLeft extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M13 14l-6-4.030 6-3.97v8z'/>
			</IconBase>
		);
	}
}
