const React = require('react');
const IconBase = require('react-icon-base');

export default class PlaylistVideo extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M17 3v-2h-15v2h15zM17 7v-2h-15v2h15zM6 11v-2h-4v2h4zM8 9h9c0.55 0 1 0.45 1 1v8c0 0.55-0.45 1-1 1h-9c-0.55 0-1-0.45-1-1v-8c0-0.55 0.45-1 1-1zM11 16l3.33-2-3.33-2v4zM6 15v-2h-4v2h4zM6 19v-2h-4v2h4z'/>
			</IconBase>
		);
	}
}
