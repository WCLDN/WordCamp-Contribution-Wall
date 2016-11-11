const React = require('react');
const IconBase = require('react-icon-base');

export default class Nametag extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M12 5v-3c0-0.55-0.45-1-1-1h-2c-0.55 0-1 0.45-1 1v3c0 0.55 0.45 1 1 1h2c0.55 0 1-0.45 1-1zM10 2c0.55 0 1 0.45 1 1s-0.45 1-1 1-1-0.45-1-1 0.45-1 1-1zM18 15v-8c0-1.1-0.9-2-2-2h-3v0.33c0 0.92-0.75 1.67-1.67 1.67h-2.66c-0.92 0-1.67-0.75-1.67-1.67v-0.33h-3c-1.1 0-2 0.9-2 2v8c0 1.1 0.9 2 2 2h12c1.1 0 2-0.9 2-2zM17 9v6h-14v-6h14zM9 11c0-0.55-0.22-1-0.5-1s-0.5 0.45-0.5 1 0.22 1 0.5 1 0.5-0.45 0.5-1zM12 11c0-0.55-0.22-1-0.5-1s-0.5 0.45-0.5 1 0.22 1 0.5 1 0.5-0.45 0.5-1zM6.040 12.21c0.92 0.48 2.34 0.79 3.96 0.79s3.040-0.31 3.96-0.79c-0.21 1-1.89 1.79-3.96 1.79s-3.75-0.79-3.96-1.79z'/>
			</IconBase>
		);
	}
}
