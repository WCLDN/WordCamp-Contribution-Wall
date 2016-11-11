const React = require('react');
const IconBase = require('react-icon-base');

export default class Menu extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M3 4h14v2h-14v-2zM3 9h14v2h-14v-2zM3 14h14v2h-14v-2z'/>
			</IconBase>
		);
	}
}
