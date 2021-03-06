const React = require('react');
const IconBase = require('react-icon-base');

export default class ImageFilter extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M14 5.87c0-2.2-1.79-4-4-4s-4 1.8-4 4c0 2.21 1.79 4 4 4s4-1.79 4-4zM3.24 10.66c-1.92 1.1-2.57 3.55-1.47 5.46 1.11 1.92 3.55 2.57 5.47 1.47 1.91-1.11 2.57-3.55 1.46-5.47-1.1-1.91-3.55-2.56-5.46-1.46zM12.76 17.59c1.92 1.1 4.36 0.45 5.47-1.46 1.1-1.92 0.45-4.36-1.47-5.47-1.91-1.1-4.36-0.45-5.46 1.46-1.11 1.92-0.45 4.36 1.46 5.47z'/>
			</IconBase>
		);
	}
}
