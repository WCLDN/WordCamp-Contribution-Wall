const React = require('react');
const IconBase = require('react-icon-base');

export default class Portfolio extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M4 5h-3.22c-0.37 0-0.74 0.32-0.69 0.84l1.56 9.99s1.85-7.36 2.21-9.13c0.11-0.53 0.61-0.7 0.98-0.7h5.16s-0.7-2.080-0.77-2.31c-0.12-0.44-0.34-0.69-0.78-0.69h-3.31c-0.36 0-0.7 0.23-0.8 0.64-0.090 0.4-0.34 1.36-0.34 1.36zM8.88 5h-4s0.42-1 0.87-1h2.13c0.48 0 1 1 1 1zM2.67 16.25c-0.31 0.47-0.76 0.75-1.26 0.75h15.73c0.54 0 0.92-0.31 1.030-0.83 0.44-2.19 1.68-8.44 1.68-8.44 0.070-0.5-0.3-0.73-0.62-0.73h-3.23v-1.47c0-0.16-0.26-0.53-0.66-0.53h-3.76c-0.52 0-0.87 0.58-0.87 0.58l-0.71 1.42h-4.41c-0.32 0-0.63 0.19-0.69 0.5 0 0-1.59 6.7-1.72 7.33-0.070 0.37-0.22 0.99-0.51 1.42zM15.38 7h-4.38s0.58-1 1.13-1h2.29c0.71 0 0.96 1 0.96 1z'/>
			</IconBase>
		);
	}
}
