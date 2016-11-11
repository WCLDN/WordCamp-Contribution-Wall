const React = require('react');
const IconBase = require('react-icon-base');

export default class ImageFlipVertical extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M20 9v2h-3v8h-14v-8h-3v-2h3v-8h14v8h3zM6.5 7h7l-3.5-4zM17 9.5h-14v1h14v-1zM13.5 13h-7l3.5 4z'/>
			</IconBase>
		);
	}
}
