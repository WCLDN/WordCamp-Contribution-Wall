const React = require('react');
const IconBase = require('react-icon-base');

export default class Camera extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M6 5v-2h-3v2h3zM18 15v-11h-9l-2 2h-5v9h16zM11 7c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z'/>
			</IconBase>
		);
	}
}
