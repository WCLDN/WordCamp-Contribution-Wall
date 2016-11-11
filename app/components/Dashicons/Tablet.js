const React = require('react');
const IconBase = require('react-icon-base');

export default class Tablet extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M4 2h12c0.55 0 1 0.45 1 1v14c0 0.55-0.45 1-1 1h-12c-0.55 0-1-0.45-1-1v-14c0-0.55 0.45-1 1-1zM15 16v-12h-10v12h10zM6 5h6l-6 5v-5z'/>
			</IconBase>
		);
	}
}
