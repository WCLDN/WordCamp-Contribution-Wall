const React = require('react');
const IconBase = require('react-icon-base');

export default class AdminPost extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M10.44 3.020l1.82-1.82 6.36 6.35-1.83 1.82c-1.050-0.68-2.48-0.57-3.41 0.36l-0.75 0.75c-0.92 0.93-1.040 2.35-0.35 3.41l-1.83 1.82-2.41-2.41-2.8 2.79c-0.42 0.42-3.38 2.71-3.8 2.29s1.86-3.39 2.28-3.81l2.79-2.79-2.41-2.42 1.83-1.82c1.050 0.69 2.48 0.57 3.4-0.36l0.75-0.75c0.93-0.92 1.050-2.35 0.36-3.41z'/>
			</IconBase>
		);
	}
}
