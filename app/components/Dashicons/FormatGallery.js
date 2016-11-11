const React = require('react');
const IconBase = require('react-icon-base');

export default class FormatGallery extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M16 4h1.96c0.57 0 1.040 0.47 1.040 1.040v12.92c0 0.57-0.47 1.040-1.040 1.040h-12.92c-0.57 0-1.040-0.47-1.040-1.040v-1.96h-1.96c-0.57 0-1.040-0.47-1.040-1.040v-12.92c0-0.57 0.47-1.040 1.040-1.040h12.92c0.57 0 1.040 0.47 1.040 1.040v1.96zM3 14h11v-11h-11v11zM8 5.5c0-0.83-0.67-1.5-1.5-1.5s-1.5 0.67-1.5 1.5 0.67 1.5 1.5 1.5 1.5-0.67 1.5-1.5zM10 10c0 0 1-5 3-5v8h-9v-6c2 0 2 3 2 3s0.33-2 2-2 2 2 2 2zM17 17v-11h-1v8.96c0 0.57-0.47 1.040-1.040 1.040h-8.96v1h11z'/>
			</IconBase>
		);
	}
}
