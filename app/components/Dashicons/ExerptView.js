const React = require('react');
const IconBase = require('react-icon-base');

export default class ExerptView extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M19 18v-16c0-0.55-0.45-1-1-1h-16c-0.55 0-1 0.45-1 1v16c0 0.55 0.45 1 1 1h16c0.55 0 1-0.45 1-1zM4 3c0.55 0 1 0.45 1 1s-0.45 1-1 1-1-0.45-1-1 0.45-1 1-1zM17 3v6h-11v-6h11zM4 11c0.55 0 1 0.45 1 1s-0.45 1-1 1-1-0.45-1-1 0.45-1 1-1zM17 11v6h-11v-6h11z'/>
			</IconBase>
		);
	}
}
