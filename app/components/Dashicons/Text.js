const React = require('react');
const IconBase = require('react-icon-base');

export default class Text extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M18 3v2h-16v-2h16zM12 7v2h-10v-2h10zM18 7v2h-4v-2h4zM8 11v2h-6v-2h6zM18 11v2h-8v-2h8zM14 15v2h-12v-2h12z'/>
			</IconBase>
		);
	}
}
