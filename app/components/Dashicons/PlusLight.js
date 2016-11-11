const React = require('react');
const IconBase = require('react-icon-base');

export default class PlusLight extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M17 9v2h-6v6h-2v-6h-6v-2h6v-6h2v6h6z'/>
			</IconBase>
		);
	}
}
