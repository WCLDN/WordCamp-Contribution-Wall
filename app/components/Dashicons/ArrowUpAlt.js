const React = require('react');
const IconBase = require('react-icon-base');

export default class ArrowUpAlt extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M11 18h-2v-12l-4 4-2-1 7-7 7 7-2 1-4-4v12z'/>
			</IconBase>
		);
	}
}
