const React = require('react');
const IconBase = require('react-icon-base');

export default class Location extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M10 2c-3.31 0-6 2.69-6 6 0 2.020 1.17 3.71 2.53 4.89 0.43 0.37 1.18 0.96 1.85 1.83 0.74 0.97 1.41 2.010 1.62 2.71 0.21-0.7 0.88-1.74 1.62-2.71 0.67-0.87 1.42-1.46 1.85-1.83 1.36-1.18 2.53-2.87 2.53-4.89 0-3.31-2.69-6-6-6zM10 4.56c1.9 0 3.44 1.54 3.44 3.44s-1.54 3.44-3.44 3.44-3.44-1.54-3.44-3.44 1.54-3.44 3.44-3.44z'/>
			</IconBase>
		);
	}
}
