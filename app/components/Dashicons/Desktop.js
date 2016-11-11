const React = require('react');
const IconBase = require('react-icon-base');

export default class Desktop extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M3 2h14c0.55 0 1 0.45 1 1v10c0 0.55-0.45 1-1 1h-5v2h2c0.55 0 1 0.45 1 1v1h-10v-1c0-0.55 0.45-1 1-1h2v-2h-5c-0.55 0-1-0.45-1-1v-10c0-0.55 0.45-1 1-1zM16 11v-7h-12v7h12zM5 5h9l-9 4v-4z'/>
			</IconBase>
		);
	}
}
