const React = require('react');
const IconBase = require('react-icon-base');

export default class Products extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M17 8h1v11h-16v-11h1v-2c0-2.76 2.24-5 5-5 0.71 0 1.39 0.15 2 0.42 0.61-0.27 1.29-0.42 2-0.42 2.76 0 5 2.24 5 5v2zM5 6v2h2v-2c0-1.13 0.39-2.16 1.020-3h-0.020c-1.65 0-3 1.35-3 3zM15 8v-2c0-1.65-1.35-3-3-3h-0.020c0.63 0.84 1.020 1.87 1.020 3v2h2zM10 3.78c-0.61 0.55-1 1.34-1 2.22v2h2v-2c0-0.88-0.39-1.67-1-2.22z'/>
			</IconBase>
		);
	}
}
