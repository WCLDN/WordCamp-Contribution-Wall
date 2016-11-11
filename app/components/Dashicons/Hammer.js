const React = require('react');
const IconBase = require('react-icon-base');

export default class Hammer extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M17.7 6.32l1.41 1.42-3.47 3.41-1.42-1.42 0.84-0.82c-0.32-0.76-0.81-1.57-1.51-2.31l-4.61 6.59-5.26 4.7c-0.39 0.39-1.020 0.39-1.42 0l-1.2-1.21c-0.39-0.39-0.39-1.020 0-1.41l10.97-9.92c-1.37-0.86-3.21-1.46-5.67-1.48 2.7-0.82 4.95-0.93 6.58-0.3 1.7 0.66 2.82 2.2 3.91 3.58z'/>
			</IconBase>
		);
	}
}
