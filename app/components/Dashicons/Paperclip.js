const React = require('react');
const IconBase = require('react-icon-base');

export default class Paperclip extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M17.050 2.7c1.93 1.94 1.93 5.13 0 7.070l-7.050 7.070c-1.88 1.89-4.91 1.93-6.86 0.15-0.060-0.050-0.13-0.090-0.19-0.15-1.93-1.94-1.93-5.12 0-7.070l4.94-4.95c0.91-0.92 2.28-1.1 3.39-0.58 0.3 0.15 0.59 0.33 0.83 0.58 1.17 1.17 1.17 3.070 0 4.24l-4.93 4.95c-0.39 0.39-1.020 0.39-1.41 0s-0.39-1.020 0-1.41l4.93-4.95c0.39-0.39 0.39-1.020 0-1.41-0.38-0.39-1.020-0.39-1.4 0l-4.94 4.95c-0.91 0.92-1.1 2.29-0.57 3.4 0.14 0.3 0.32 0.59 0.57 0.84s0.54 0.43 0.84 0.57c1.11 0.53 2.47 0.35 3.39-0.57l7.050-7.070c1.16-1.17 1.16-3.080 0-4.25-0.56-0.55-1.28-0.83-2-0.86-0.080 0.010-0.16 0.010-0.24 0-0.22-0.030-0.43-0.11-0.6-0.27-0.39-0.4-0.38-1.050 0.020-1.45 0.16-0.16 0.36-0.24 0.56-0.28 0.14-0.020 0.27-0.010 0.4 0.020 1.19 0.060 2.36 0.52 3.27 1.43z'/>
			</IconBase>
		);
	}
}