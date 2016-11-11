const React = require('react');
const IconBase = require('react-icon-base');

export default class Leftright extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M3 10.030l6-4.030v8zM11 6l6 4.030-6 3.97v-8z'/>
			</IconBase>
		);
	}
}
