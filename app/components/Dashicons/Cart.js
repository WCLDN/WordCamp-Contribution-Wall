const React = require('react');
const IconBase = require('react-icon-base');

export default class Cart extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M6 13h9c0.55 0 1 0.45 1 1s-0.45 1-1 1h-10c-0.55 0-1-0.45-1-1v-10h-2c-0.55 0-1-0.45-1-1s0.45-1 1-1h3c0.55 0 1 0.45 1 1v2h13l-4 7h-9v1zM5.5 16c0.83 0 1.5 0.67 1.5 1.5s-0.67 1.5-1.5 1.5-1.5-0.67-1.5-1.5 0.67-1.5 1.5-1.5zM14.5 16c0.83 0 1.5 0.67 1.5 1.5s-0.67 1.5-1.5 1.5-1.5-0.67-1.5-1.5 0.67-1.5 1.5-1.5z'/>
			</IconBase>
		);
	}
}
