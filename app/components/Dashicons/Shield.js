const React = require('react');
const IconBase = require('react-icon-base');

export default class Shield extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M10 2c0 0 3 2 7 2 0 11-7 14-7 14s-7-3-7-14c4 0 7-2 7-2zM10 10h5s1-1 1-5c0 0-5-1-6-2v7h-5c1 4 5 7 5 7v-7z'/>
			</IconBase>
		);
	}
}
