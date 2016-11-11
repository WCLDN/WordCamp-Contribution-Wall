const React = require('react');
const IconBase = require('react-icon-base');

export default class Plus extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M17 7v3h-5v5h-3v-5h-5v-3h5v-5h3v5h5z'/>
			</IconBase>
		);
	}
}
