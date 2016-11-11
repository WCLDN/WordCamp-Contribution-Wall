const React = require('react');
const IconBase = require('react-icon-base');

export default class ImageFlipHorizontal extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M19 3v14h-8v3h-2v-3h-8v-14h8v-3h2v3h8zM10.5 17v-14h-1v14h1zM7 6.5l-4 3.5 4 3.5v-7zM17 10l-4-3.5v7z'/>
			</IconBase>
		);
	}
}
