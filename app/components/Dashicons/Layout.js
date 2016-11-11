const React = require('react');
const IconBase = require('react-icon-base');

export default class Layout extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M2 2h5v11h-5v-11zM8 2h5v5h-5v-5zM14 2h4v16h-4v-16zM8 8h5v5h-5v-5zM2 14h11v4h-11v-4z'/>
			</IconBase>
		);
	}
}
