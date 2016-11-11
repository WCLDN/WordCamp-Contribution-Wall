const React = require('react');
const IconBase = require('react-icon-base');

export default class Vault extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M18 17v-14c0-0.55-0.45-1-1-1h-14c-0.55 0-1 0.45-1 1v14c0 0.55 0.45 1 1 1h14c0.55 0 1-0.45 1-1zM17 17h-14v-14h14v14zM4.75 4h10.5c0.41 0 0.75 0.34 0.75 0.75v1.25h-1v3h1v2h-1v3h1v1.25c0 0.41-0.34 0.75-0.75 0.75h-10.5c-0.41 0-0.75-0.34-0.75-0.75v-10.5c0-0.41 0.34-0.75 0.75-0.75zM13 10c0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4 4-1.79 4-4zM9 7l0.77 1.15c0.72 0.31 1.23 1.020 1.23 1.85 0 1.1-0.9 2-2 2s-2-0.9-2-2c0-0.83 0.51-1.54 1.23-1.85z'/>
			</IconBase>
		);
	}
}
