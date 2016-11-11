const React = require('react');
const IconBase = require('react-icon-base');

export default class AlignLeft extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M3 5h14v-2h-14v2zM12 13v-6h-9v6h9zM14 9h3v-2h-3v2zM14 13h3v-2h-3v2zM3 17h14v-2h-14v2z'/>
			</IconBase>
		);
	}
}
