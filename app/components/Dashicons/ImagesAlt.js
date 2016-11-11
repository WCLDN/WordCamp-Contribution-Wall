const React = require('react');
const IconBase = require('react-icon-base');

export default class ImagesAlt extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M4 15v-3h-2v-10h12v3h2v3h2v10h-12v-3h-2zM11 3c-1.1 0-2 0.9-2 2h4c0-1.1-0.89-2-2-2zM4 11v-5h-1v5h1zM11 8h4c0-1.1-0.89-2-2-2-1.1 0-2 0.9-2 2zM6 14v-5h-1v5h1zM15 13c1.1 0 2-0.89 2-2 0-1.1-0.9-2-2-2s-2 0.9-2 2c0 1.11 0.9 2 2 2zM17 17v-2c-5 0-5-3-10-3v5h10z'/>
			</IconBase>
		);
	}
}
