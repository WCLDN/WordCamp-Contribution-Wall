const React = require('react');
const IconBase = require('react-icon-base');

export default class ArrowLeftAlt extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M18 9v2h-12l4 4-1 2-7-7 7-7 1 2-4 4h12z'/>
			</IconBase>
		);
	}
}
