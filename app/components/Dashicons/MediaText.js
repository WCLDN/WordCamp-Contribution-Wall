const React = require('react');
const IconBase = require('react-icon-base');

export default class MediaText extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M12 2l4 4v12h-12v-16h8zM5 3v1h6v-1h-6zM12 6h3l-3-3v3zM5 5v1h6v-1h-6zM15 8v-1h-10v1h10zM15 10v-1h-10v1h10zM15 12v-1h-10v1h10zM11 14v-1h-6v1h6z'/>
			</IconBase>
		);
	}
}