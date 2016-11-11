const React = require('react');
const IconBase = require('react-icon-base');

export default class StarHalf extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M10 1l-3 6-6 0.75 4.13 4.62-1.13 6.63 6-3 6 3-1.12-6.63 4.12-4.62-6-0.75zM10 3.24l2.34 4.69 4.65 0.58-3.18 3.56 0.87 5.15-4.68-2.34v-11.64z'/>
			</IconBase>
		);
	}
}
