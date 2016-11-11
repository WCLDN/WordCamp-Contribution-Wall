const React = require('react');
const IconBase = require('react-icon-base');

export default class ArrowDownAlt extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M9 2h2v12l4-4 2 1-7 7-7-7 2-1 4 4v-12z'/>
			</IconBase>
		);
	}
}
