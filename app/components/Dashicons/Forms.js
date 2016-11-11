const React = require('react');
const IconBase = require('react-icon-base');

export default class Forms extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M2 2h7v7h-7v-7zM11 2v7h7v-7h-7zM5.5 4.5l1.5-1.5h-3zM12 8v-5h5v5h-5zM4.5 5.5l-1.5-1.5v3zM8 4l-1.5 1.5 1.5 1.5v-3zM5.5 6.5l-1.5 1.5h3zM9 18v-7h-7v7h7zM18 18h-7v-7h7v7zM8 12v5h-5v-5h5zM14.5 13.5l1.5-1.5h-3zM12 16l1.5-1.5-1.5-1.5v3zM15.5 14.5l1.5 1.5v-3zM14.5 15.5l-1.5 1.5h3z'/>
			</IconBase>
		);
	}
}
