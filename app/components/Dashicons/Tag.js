const React = require('react');
const IconBase = require('react-icon-base');

export default class Tag extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M11 2h7v7l-10 10-7-7zM14 8c1.1 0 2-0.9 2-2s-0.9-2-2-2-2 0.9-2 2 0.9 2 2 2z'/>
			</IconBase>
		);
	}
}
