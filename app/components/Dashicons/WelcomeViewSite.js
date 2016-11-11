const React = require('react');
const IconBase = require('react-icon-base');

export default class WelcomeViewSite extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M18 14v-10c0-0.55-0.45-1-1-1h-14c-0.55 0-1 0.45-1 1v10c0 0.55 0.45 1 1 1h14c0.55 0 1-0.45 1-1zM10 6c2.3 0 4.4 1.14 6 3-1.6 1.86-3.7 3-6 3s-4.4-1.14-6-3c1.6-1.86 3.7-3 6-3zM12 9c0-1.1-0.9-2-2-2s-2 0.9-2 2 0.9 2 2 2 2-0.9 2-2zM14 17h3v1h-14v-1h3v-1h8v1z'/>
			</IconBase>
		);
	}
}
