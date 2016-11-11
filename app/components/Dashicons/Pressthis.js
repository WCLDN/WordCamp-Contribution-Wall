const React = require('react');
const IconBase = require('react-icon-base');

export default class Pressthis extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M14.76 1c1.79 0 3.24 1.46 3.24 3.25 0 1.78-1.45 3.24-3.24 3.24-0.23 0-0.47-0.030-0.7-0.080l-1.060 1.060v10.53h-11v-15h9.54c0.13-2 1.52-3 3.22-3zM14.76 6.49c1.24 0 2.24-1.010 2.24-2.24 0-1.24-1-2.25-2.24-2.25s-2.24 1.010-2.24 2.25c0 0.37 0.1 0.72 0.27 1.030l-3.22 3.22c-0.28 0.28-1.77 2.22-1.5 2.49 0.020 0.030 0.060 0.040 0.1 0.040 0.49 0 2.14-1.28 2.39-1.53l3.24-3.24c0.29 0.14 0.61 0.23 0.96 0.23z'/>
			</IconBase>
		);
	}
}
