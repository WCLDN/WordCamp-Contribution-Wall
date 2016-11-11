const React = require('react');
const IconBase = require('react-icon-base');

export default class Smartphone extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M6 2h8c0.55 0 1 0.45 1 1v14c0 0.55-0.45 1-1 1h-8c-0.55 0-1-0.45-1-1v-14c0-0.55 0.45-1 1-1zM13 14v-10h-6v10h6zM8 5h4l-4 5v-5z'/>
			</IconBase>
		);
	}
}
