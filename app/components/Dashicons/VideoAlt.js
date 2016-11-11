const React = require('react');
const IconBase = require('react-icon-base');

export default class VideoAlt extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M8 5c0-0.55-0.45-1-1-1h-5c-0.55 0-1 0.45-1 1 0 0.57 0.49 1 1 1h5c0.55 0 1-0.45 1-1zM14 10l4-4v10l-4-4v-2zM13 14v-6c0-0.55-0.45-1-1-1h-8c-0.55 0-1 0.45-1 1v6c0 0.55 0.45 1 1 1h8c0.55 0 1-0.45 1-1z'/>
			</IconBase>
		);
	}
}
