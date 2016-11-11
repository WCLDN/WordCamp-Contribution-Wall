const React = require('react');
const IconBase = require('react-icon-base');

export default class WelcomeWriteBlog extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M16.89 1.2l1.41 1.41c0.39 0.39 0.39 1.020 0 1.41l-4.3 4.31v9.67h-11v-15h10.67l1.8-1.8c0.4-0.39 1.030-0.4 1.42 0zM11.23 9.68l5.37-5.36-1.42-1.42-5.36 5.37-0.71 2.12z'/>
			</IconBase>
		);
	}
}
