const React = require('react');
const IconBase = require('react-icon-base');

export default class ArrowRightAlt extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M2 11v-2h12l-4-4 1-2 7 7-7 7-1-2 4-4h-12z'/>
			</IconBase>
		);
	}
}
