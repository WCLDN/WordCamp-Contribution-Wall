const React = require('react');
const IconBase = require('react-icon-base');

export default class ChartBar extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M18 18v-16h-4v16h4zM12 18v-11h-4v11h4zM6 18v-8h-4v8h4z'/>
			</IconBase>
		);
	}
}
