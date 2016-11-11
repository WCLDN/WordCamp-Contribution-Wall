const React = require('react');
const IconBase = require('react-icon-base');

export default class AdminTools extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M16.68 9.77c-1.34 1.34-3.3 1.67-4.95 0.99l-5.41 6.52c-0.99 0.99-2.59 0.99-3.58 0s-0.99-2.59 0-3.57l6.52-5.42c-0.68-1.65-0.35-3.61 0.99-4.95 1.28-1.28 3.12-1.62 4.72-1.060l-2.89 2.89 2.82 2.82 2.86-2.87c0.53 1.58 0.18 3.39-1.080 4.65zM3.81 16.21c0.4 0.39 1.040 0.39 1.43 0 0.4-0.4 0.4-1.040 0-1.43-0.39-0.4-1.030-0.4-1.43 0-0.39 0.39-0.39 1.030 0 1.43z'/>
			</IconBase>
		);
	}
}
