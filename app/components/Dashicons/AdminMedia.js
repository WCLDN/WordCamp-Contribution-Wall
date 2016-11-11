const React = require('react');
const IconBase = require('react-icon-base');

export default class AdminMedia extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M13 11v-7c0-0.55-0.45-1-1-1h-1.67l-1.33-2h-4l-1.33 2h-1.67c-0.55 0-1 0.45-1 1v7c0 0.55 0.45 1 1 1h10c0.55 0 1-0.45 1-1zM7 4.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5zM14 6h5v10.5c0 1.38-1.12 2.5-2.5 2.5s-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5c0.17 0 0.34 0.020 0.5 0.050v-5.050h-3v-3zM10 14.050v-1.050h2v3.5c0 1.38-1.12 2.5-2.5 2.5s-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5c0.17 0 0.34 0.020 0.5 0.050z'/>
			</IconBase>
		);
	}
}
