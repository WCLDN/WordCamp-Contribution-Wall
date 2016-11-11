const React = require('react');
const IconBase = require('react-icon-base');

export default class ImageCrop extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M19 12v3h-4v4h-3v-4h-8v-8h-4v-3h4v-4h3v4h7l3-3 1 1-3 3v7h4zM11 7h-4v4zM8 12h4v-4z'/>
			</IconBase>
		);
	}
}
