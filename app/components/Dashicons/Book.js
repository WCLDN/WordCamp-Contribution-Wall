const React = require('react');
const IconBase = require('react-icon-base');

export default class Book extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M16 3h2v16h-13c-1.66 0-3-1.34-3-3v-12c0-1.66 1.34-3 3-3h9v14h-9c-0.55 0-1 0.45-1 1s0.45 1 1 1h11v-14z'/>
			</IconBase>
		);
	}
}
