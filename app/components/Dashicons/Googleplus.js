const React = require('react');
const IconBase = require('react-icon-base');

export default class Googleplus extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M6.73 10h5.4c0.050 0.29 0.090 0.57 0.090 0.95 0 3.27-2.19 5.6-5.49 5.6-3.17 0-5.73-2.57-5.73-5.73 0-3.17 2.56-5.73 5.73-5.73 1.54 0 2.84 0.57 3.83 1.5l-1.55 1.5c-0.43-0.41-1.17-0.89-2.28-0.89-1.96 0-3.55 1.62-3.55 3.62 0 1.99 1.59 3.61 3.55 3.61 2.26 0 3.11-1.62 3.24-2.47h-3.24v-1.96zM19 10v1.64h-1.64v1.63h-1.63v-1.63h-1.64v-1.64h1.64v-1.64h1.63v1.64h1.64z'/>
			</IconBase>
		);
	}
}