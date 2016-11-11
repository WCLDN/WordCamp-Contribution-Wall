const React = require('react');
const IconBase = require('react-icon-base');

export default class Slides extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M5 14v-8h10v8h-10zM2 13v-6h2v6h-2zM6 7v6h8v-6h-8zM16 7h2v6h-2v-6zM13 9v-1h-6v1h6zM13 12v-2h-6v2h6z'/>
			</IconBase>
		);
	}
}
