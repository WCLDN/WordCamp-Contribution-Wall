const React = require('react');
const IconBase = require('react-icon-base');

export default class BookAlt extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M5 17h13v2h-13c-1.66 0-3-1.34-3-3v-12c0-1.66 1.34-3 3-3h13v14h-13c-0.55 0-1 0.45-1 1s0.45 1 1 1zM7 13.5v-11c0-0.28-0.22-0.5-0.5-0.5s-0.5 0.22-0.5 0.5v11c0 0.28 0.22 0.5 0.5 0.5s0.5-0.22 0.5-0.5z'/>
			</IconBase>
		);
	}
}
