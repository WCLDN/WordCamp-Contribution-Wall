const React = require('react');
const IconBase = require('react-icon-base');

export default class Microphone extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M12 9v-6c0-1.1-0.89-2-2-2-1.12 0-2 0.94-2 2v6c0 1.1 0.9 2 2 2 1.13 0 2-0.94 2-2zM16 9c0 2.97-2.16 5.43-5 5.91v2.090h2c0.56 0 1 0.45 1 1s-0.44 1-1 1h-6c-0.55 0-1-0.45-1-1s0.45-1 1-1h2v-2.090c-2.83-0.48-5-2.94-5-5.91 0-0.55 0.45-1 1-1 0.56 0 1 0.45 1 1 0 2.21 1.8 4 4 4 2.21 0 4-1.79 4-4 0-0.55 0.45-1 1-1 0.56 0 1 0.45 1 1z'/>
			</IconBase>
		);
	}
}
