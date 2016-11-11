const React = require('react');
const IconBase = require('react-icon-base');

export default class Share extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M14.5 12c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3c0-0.24 0.030-0.46 0.090-0.69l-4.38-2.3c-0.55 0.61-1.33 0.99-2.21 0.99-1.66 0-3-1.34-3-3s1.34-3 3-3c0.88 0 1.66 0.39 2.21 0.99l4.38-2.3c-0.060-0.23-0.090-0.45-0.090-0.69 0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3c-0.88 0-1.66-0.39-2.21-0.99l-4.38 2.3c0.060 0.23 0.090 0.45 0.090 0.69s-0.030 0.46-0.090 0.69l4.38 2.3c0.55-0.61 1.33-0.99 2.21-0.99z'/>
			</IconBase>
		);
	}
}
