const React = require('react');
const IconBase = require('react-icon-base');

export default class Move extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M19 10l-4 4v-3h-4v4h3l-4 4-4-4h3v-4h-4v3l-4-4 4-4v3h4v-4h-3l4-4 4 4h-3v4h4v-3z'/>
			</IconBase>
		);
	}
}
