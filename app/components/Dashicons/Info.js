const React = require('react');
const IconBase = require('react-icon-base');

export default class Info extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8zM11 6c0-0.55-0.45-1-1-1s-1 0.45-1 1 0.45 1 1 1 1-0.45 1-1zM11 15v-6h-2v6h2z'/>
			</IconBase>
		);
	}
}
