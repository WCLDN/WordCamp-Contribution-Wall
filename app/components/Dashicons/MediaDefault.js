const React = require('react');
const IconBase = require('react-icon-base');

export default class MediaDefault extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M12 2l4 4v12h-12v-16h8zM12 6h3l-3-3v3z'/>
			</IconBase>
		);
	}
}
