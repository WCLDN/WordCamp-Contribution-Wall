const React = require('react');
const IconBase = require('react-icon-base');

export default class Analytics extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M18 18v-16h-16v16h16zM16 5h-12v-1h12v1zM7 7v3h3c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3zM8 9v-2c1.1 0 2 0.9 2 2h-2zM16 8h-4v-1h4v1zM16 11h-4v-2h4v2zM16 13h-4v-1h4v1zM16 16h-12v-1h12v1z'/>
			</IconBase>
		);
	}
}
