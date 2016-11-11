const React = require('react');
const IconBase = require('react-icon-base');

export default class Cloud extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M14.85 10.030c1.76 0.18 3.15 1.66 3.15 3.47 0 1.93-1.57 3.5-3.5 3.5h-10c-1.93 0-3.5-1.57-3.5-3.5 0-1.79 1.34-3.24 3.060-3.46-0.040-0.17-0.060-0.35-0.060-0.54 0-1.38 1.12-2.5 2.5-2.5 0.34 0 0.66 0.070 0.95 0.19 0.66-1.3 2-2.19 3.55-2.19 2.21 0 4 1.79 4 4 0 0.36-0.060 0.7-0.15 1.030z'/>
			</IconBase>
		);
	}
}
