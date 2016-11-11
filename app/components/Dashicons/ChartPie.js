const React = require('react');
const IconBase = require('react-icon-base');

export default class ChartPie extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M10 10v-7c3.87 0 7 3.13 7 7h-7zM9 4v7h7c0 3.87-3.13 7-7 7s-7-3.13-7-7 3.13-7 7-7z'/>
			</IconBase>
		);
	}
}
