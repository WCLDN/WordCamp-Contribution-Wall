const React = require('react');
const IconBase = require('react-icon-base');

export default class Clipboard extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M11.9 0.39l1.4 1.4c1.61 0.19 3.5-0.74 4.61 0.37s0.18 3 0.37 4.61l1.4 1.4c0.39 0.39 0.39 1.020 0 1.41l-9.19 9.2c-0.4 0.39-1.030 0.39-1.42 0l-7.78-7.78c-0.39-0.39-0.39-1.020 0-1.42l9.2-9.19c0.39-0.39 1.020-0.39 1.41 0zM12.48 2.64l-0.58 0.58 4.95 4.95 0.58-0.58c-0.19-0.6-0.2-1.22-0.15-1.82 0.020-0.31 0.050-0.62 0.090-0.92 0.12-1 0.18-1.63-0.17-1.98s-0.98-0.29-1.98-0.17c-0.3 0.040-0.61 0.070-0.92 0.090-0.6 0.050-1.22 0.040-1.82-0.15zM16.5 3.57c0.39 0.39 0.39 1.030 0 1.42s-1.030 0.39-1.42 0-0.39-1.030 0-1.42 1.030-0.39 1.42 0zM9.78 3.93l-0.71 0.7 6.37 6.37 0.7-0.71zM8.36 5.34l-0.7 0.71 6.36 6.36 0.71-0.7zM6.95 6.76l-0.71 0.7 6.37 6.37 0.7-0.71zM5.54 8.17l-0.71 0.71 6.36 6.36 0.71-0.71zM4.12 9.58l-0.71 0.71 6.37 6.37 0.71-0.71z'/>
			</IconBase>
		);
	}
}
