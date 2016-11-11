const React = require('react');
const IconBase = require('react-icon-base');

export default class Minus extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M4 9h12v2h-12v-2z'/>
			</IconBase>
		);
	}
}
