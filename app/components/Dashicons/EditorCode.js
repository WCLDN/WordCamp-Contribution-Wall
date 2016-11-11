const React = require('react');
const IconBase = require('react-icon-base');

export default class EditorCode extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M9 6l-4 4 4 4-1 2-6-6 6-6zM11 14l4-4-4-4 1-2 6 6-6 6z'/>
			</IconBase>
		);
	}
}
