const React = require('react');
const IconBase = require('react-icon-base');

export default class Flag extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M5 18v-15h-2v15h2zM6 12v-8c3-1 7 1 11 0v8c-3 1.27-8-1-11 0z'/>
			</IconBase>
		);
	}
}
