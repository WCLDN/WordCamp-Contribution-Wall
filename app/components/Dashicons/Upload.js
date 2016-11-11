const React = require('react');
const IconBase = require('react-icon-base');

export default class Upload extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M8 14v-6h-3l5-6 5 6h-3v6h-4zM6 16v-6h-2v8h12.010v-8h-2.010v6h-8z'/>
			</IconBase>
		);
	}
}
