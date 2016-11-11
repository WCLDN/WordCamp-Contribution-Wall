const React = require('react');
const IconBase = require('react-icon-base');

export default class ImageRotateLeft extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M7 5h-1.95c0-1.74 0.85-2.9 2.95-2.9v-2.1c-3.15 0-5.040 2.11-5.040 5h-1.78l2.62 3.39zM20 1v14h-5v5h-14v-10h9v-9h10zM18 3h-6v7h3v3h3v-10zM13 12h-10v6h10v-6z'/>
			</IconBase>
		);
	}
}
