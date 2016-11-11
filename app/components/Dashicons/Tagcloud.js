const React = require('react');
const IconBase = require('react-icon-base');

export default class Tagcloud extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M11 3v4h-10v-4h10zM19 3v4h-7v-4h7zM7 8v3h-6v-3h6zM19 8v3h-11v-3h11zM9 12v2h-8v-2h8zM19 12v2h-9v-2h9zM6 15v1h-5v-1h5zM11 15v1h-4v-1h4zM14 15v1h-2v-1h2zM19 15v1h-4v-1h4z'/>
			</IconBase>
		);
	}
}
