const React = require('react');
const IconBase = require('react-icon-base');

export default class ImageRotate extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M10.25 1.020c5.1 0 8.75 4.040 8.75 9s-3.65 9-8.75 9c-3.2 0-6.020-1.59-7.68-3.99l2.59-1.52c1.1 1.5 2.86 2.51 4.84 2.51 3.3 0 6-2.79 6-6s-2.7-6-6-6c-1.97 0-3.72 1-4.82 2.49l1.82 1.51-6 2v-7l1.89 1.58c1.69-2.17 4.36-3.58 7.36-3.58z'/>
			</IconBase>
		);
	}
}
