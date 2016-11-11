const React = require('react');
const IconBase = require('react-icon-base');

export default class EditorContract extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M15.75 6.75l2.25-3.75v14l-2.25-3.75 1.25-1.25h-4v4l1.25-1.25 3.75 2.25h-16l3.75-2.25 1.25 1.25v-4h-4l1.25 1.25-2.25 3.75v-14l2.25 3.75-1.25 1.25h4v-4l-1.25 1.25-3.75-2.25h16l-3.75 2.25-1.25-1.25v4h4z'/>
			</IconBase>
		);
	}
}
