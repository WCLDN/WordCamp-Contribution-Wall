const React = require('react');
const IconBase = require('react-icon-base');

export default class MediaArchive extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M12 2l4 4v12h-12v-16h8zM12 6h3l-3-3v3zM8 3.5v2l1.8-1zM11 5l-1.8 1 1.8 1v-2zM8 6.5v2l1.8-1zM11 8l-1.8 1 1.8 1v-2zM8 9.5v2l1.8-1zM11 11l-1.8 1 1.8 1v-2zM9.5 17c0.83 0 1.62-0.72 1.5-1.63-0.050-0.38-0.49-1.61-0.49-1.61l-1.99-1.1s-0.45 1.95-0.52 2.71c-0.070 0.77 0.67 1.63 1.5 1.63zM9.5 14.61c0.42 0 0.76 0.34 0.76 0.76 0 0.43-0.34 0.77-0.76 0.77s-0.76-0.34-0.76-0.77c0-0.42 0.34-0.76 0.76-0.76z'/>
			</IconBase>
		);
	}
}