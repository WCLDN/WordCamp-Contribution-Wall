const React = require('react');
const IconBase = require('react-icon-base');

export default class MediaVideo extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M12 2l4 4v12h-12v-16h8zM12 6h3l-3-3v3zM11 14v-3c0-0.27-0.1-0.51-0.29-0.71-0.2-0.19-0.44-0.29-0.71-0.29h-3c-0.27 0-0.51 0.1-0.71 0.29-0.19 0.2-0.29 0.44-0.29 0.71v3c0 0.27 0.1 0.51 0.29 0.71 0.2 0.19 0.44 0.29 0.71 0.29h3c0.27 0 0.51-0.1 0.71-0.29 0.19-0.2 0.29-0.44 0.29-0.71zM14 15v-5l-2 2v1z'/>
			</IconBase>
		);
	}
}
