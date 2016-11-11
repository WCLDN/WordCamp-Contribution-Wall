const React = require('react');
const IconBase = require('react-icon-base');

export default class GridView extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M2 1h16c0.55 0 1 0.45 1 1v16c0 0.55-0.45 1-1 1h-16c-0.55 0-1-0.45-1-1v-16c0-0.55 0.45-1 1-1zM9.010 8.99v-6h-6.010v6h6.010zM17.010 8.99v-6h-6v6h6zM9.010 17v-6h-6.010v6h6.010zM17.010 17v-6h-6v6h6z'/>
			</IconBase>
		);
	}
}
