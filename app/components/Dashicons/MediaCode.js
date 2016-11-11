const React = require('react');
const IconBase = require('react-icon-base');

export default class MediaCode extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M12 2l4 4v12h-12v-16h8zM9 13l-2-2 2-2-1-1-3 3 3 3zM12 14l3-3-3-3-1 1 2 2-2 2z'/>
			</IconBase>
		);
	}
}
