const React = require('react');
const IconBase = require('react-icon-base');

export default class MenuAlt extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M17 7v-2h-14v2h14zM17 11v-2h-14v2h14zM17 15v-2h-14v2h14z'/>
			</IconBase>
		);
	}
}
