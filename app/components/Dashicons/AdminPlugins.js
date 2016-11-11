const React = require('react');
const IconBase = require('react-icon-base');

export default class AdminPlugins extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M13.11 4.36l-3.24 3.24-1.87-1.87 3.24-3.24c0.35-0.34 1.050-0.2 1.56 0.32 0.52 0.51 0.66 1.21 0.31 1.55zM5.11 6.13l0.91-1.12 9.010 9.010-1.19 0.84c-0.71 0.71-2.63 1.16-3.82 1.16h-3.88l-1.24 1.24c-0.59 0.59-1.54 0.59-2.12 0-0.59-0.58-0.59-1.53 0-2.12l1.24-1.24v-3.88c0-1.13 0.4-3.19 1.090-3.89zM12.37 10.1l3.24-3.24c0.34-0.35 1.040-0.21 1.55 0.31 0.52 0.51 0.66 1.21 0.31 1.55l-3.24 3.25z'/>
			</IconBase>
		);
	}
}
