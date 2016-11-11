const React = require('react');
const IconBase = require('react-icon-base');

export default class Category extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M5 7h13v10h-16v-13h7l2 2h-7v9h1v-8z'/>
			</IconBase>
		);
	}
}
