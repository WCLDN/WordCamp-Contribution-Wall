const React = require('react');
const IconBase = require('react-icon-base');

export default class Archive extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M19 4v2h-18v-2h18zM2 7h16v10h-16v-10zM13 10v-1h-6v1h6z'/>
			</IconBase>
		);
	}
}
