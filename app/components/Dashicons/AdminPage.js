const React = require('react');
const IconBase = require('react-icon-base');

export default class AdminPage extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M6 15v-13h10v13h-10zM5 16h8v2h-10v-13h2v11z'/>
			</IconBase>
		);
	}
}
