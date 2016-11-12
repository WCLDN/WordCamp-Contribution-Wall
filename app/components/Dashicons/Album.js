const React = require('react');
const IconBase = require('react-icon-base');

export default class Album extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M0 18h10v-0.26c1.52 0.4 3.17 0.35 4.76-0.24 4.14-1.52 6.27-6.12 4.75-10.26-1.43-3.89-5.58-6-9.51-4.98v-0.26h-10v16zM9 3v14h-8v-14h8zM14.45 11.22c-0.68 1.35-2.32 1.9-3.67 1.23-0.31-0.15-0.57-0.35-0.78-0.59v-3.73c0.8-0.86 2.11-1.13 3.22-0.58 1.35 0.68 1.9 2.32 1.23 3.67zM11.7 10.4c0.22 0.16 0.53 0.12 0.7-0.1 0.16-0.22 0.12-0.53-0.1-0.7s-0.53-0.12-0.7 0.1c-0.16 0.21-0.12 0.53 0.1 0.7zM14.71 14.070c-1.17 0.78-2.56 0.99-3.83 0.69-0.27-0.060-0.44-0.34-0.37-0.61s0.34-0.43 0.62-0.36l0.17 0.040c0.96 0.17 1.98-0.010 2.86-0.59 0.47-0.32 0.86-0.72 1.14-1.18 0.15-0.23 0.45-0.3 0.69-0.16 0.23 0.15 0.3 0.46 0.16 0.69-0.36 0.57-0.84 1.080-1.44 1.48zM15.76 15.64c-1.48 0.99-3.21 1.32-4.84 1.060-0.28-0.050-0.47-0.32-0.41-0.6 0.050-0.27 0.32-0.45 0.61-0.39l0.22 0.040c1.31 0.15 2.68-0.14 3.87-0.94 0.71-0.47 1.27-1.070 1.7-1.74 0.14-0.24 0.45-0.31 0.68-0.16 0.24 0.14 0.31 0.45 0.16 0.69-0.49 0.79-1.16 1.49-1.99 2.040z'/>
			</IconBase>
		);
	}
}