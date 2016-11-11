const React = require('react');
const IconBase = require('react-icon-base');

export default class FormatAside extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M1 1h18v12l-6 6h-12v-18zM4 4v1h12v-1h-12zM4 8v1h12v-1h-12zM10 13v-1h-6v1h6zM12 17l5-5h-5v5z'/>
			</IconBase>
		);
	}
}
