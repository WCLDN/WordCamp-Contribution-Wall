const React = require('react');
const IconBase = require('react-icon-base');

export default class Redo extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M2.77 10.1c0.51-1.2 1.24-2.28 2.15-3.18 0.9-0.91 1.98-1.64 3.18-2.15s2.52-0.79 3.9-0.79v-2.98l6 4.5-6 4.5v-3c-0.97 0-1.89 0.2-2.73 0.55-0.83 0.35-1.59 0.87-2.22 1.5s-1.15 1.39-1.5 2.23c-0.35 0.83-0.55 1.75-0.55 2.72s0.2 1.89 0.55 2.73l-2.78 1.17c-0.51-1.2-0.79-2.52-0.79-3.9s0.28-2.7 0.79-3.9z'/>
			</IconBase>
		);
	}
}
