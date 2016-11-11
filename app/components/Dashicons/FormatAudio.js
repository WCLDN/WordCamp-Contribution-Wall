const React = require('react');
const IconBase = require('react-icon-base');

export default class FormatAudio extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M6.99 3.080l11.020-2c0.55-0.080 0.99 0.45 0.99 1v12.42c0 1.94-1.57 3.5-3.5 3.5s-3.5-1.56-3.5-3.5c0-1.93 1.57-3.5 3.5-3.5 0.54 0 1.040 0.14 1.5 0.35v-6.27l-9 2v8.92c-0.24 1.7-1.74 3-3.5 3-1.93 0-3.5-1.56-3.5-3.5 0-1.93 1.57-3.5 3.5-3.5 0.54 0 1.040 0.14 1.5 0.35v-8.27c0-0.55 0.44-0.91 0.99-1z'/>
			</IconBase>
		);
	}
}
