const React = require('react');
const IconBase = require('react-icon-base');

export default class WelcomeComments extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M5 2h10c1.1 0 2 0.9 2 2v8c0 1.1-0.9 2-2 2h-2l-5 5v-5h-3c-1.1 0-2-0.9-2-2v-8c0-1.1 0.9-2 2-2zM13.5 10.5l-2.5-2.5 2.5-2.5-1-1-2.5 2.5-2.5-2.5-1 1 2.5 2.5-2.5 2.5 1 1 2.5-2.5 2.5 2.5z'/>
			</IconBase>
		);
	}
}
