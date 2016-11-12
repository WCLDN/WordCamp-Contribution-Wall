const React = require('react');
const IconBase = require('react-icon-base');

export default class MediaAudio extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M12 2l4 4v12h-12v-16h8zM12 6h3l-3-3v3zM13 13.26v-5.17c0-0.11-0.040-0.21-0.12-0.29-0.070-0.080-0.16-0.11-0.27-0.1 0 0-3.97 0.71-4.25 0.78-0.29 0.060-0.36 0.32-0.36 0.52v3.37c-0.2-0.090-0.42-0.070-0.6-0.070-0.38 0-0.7 0.13-0.96 0.39-0.26 0.27-0.4 0.58-0.4 0.96 0 0.37 0.14 0.69 0.4 0.95 0.26 0.27 0.58 0.4 0.96 0.4 0.34 0 0.7-0.040 0.96-0.26 0.26-0.23 0.64-0.65 0.64-1.12v-3.32l3-0.6v2.3c-0.67-0.2-1.17 0.040-1.44 0.31-0.26 0.26-0.39 0.58-0.39 0.95 0 0.38 0.13 0.69 0.39 0.96 0.27 0.26 0.71 0.39 1.080 0.39 0.38 0 0.7-0.13 0.96-0.39 0.26-0.27 0.4-0.58 0.4-0.96z'/>
			</IconBase>
		);
	}
}