const React = require('react');
const IconBase = require('react-icon-base');

export default class Undo extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M17.23 10.1c0.51 1.2 0.79 2.52 0.79 3.9s-0.28 2.7-0.79 3.9l-2.78-1.17c0.35-0.84 0.55-1.76 0.55-2.73s-0.2-1.89-0.55-2.72c-0.35-0.84-0.87-1.6-1.5-2.23s-1.39-1.15-2.22-1.5c-0.84-0.35-1.76-0.55-2.73-0.55v3l-6-4.5 6-4.5v2.98c1.38 0 2.7 0.28 3.9 0.79s2.28 1.24 3.18 2.15c0.91 0.9 1.64 1.98 2.15 3.18z'/>
			</IconBase>
		);
	}
}
