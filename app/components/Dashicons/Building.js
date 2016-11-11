const React = require('react');
const IconBase = require('react-icon-base');

export default class Building extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M3 20h14v-20h-14v20zM7 3h-2v-2h2v2zM11 3h-2v-2h2v2zM15 3h-2v-2h2v2zM7 6h-2v-2h2v2zM11 6h-2v-2h2v2zM15 6h-2v-2h2v2zM7 9h-2v-2h2v2zM11 9h-2v-2h2v2zM15 9h-2v-2h2v2zM7 12h-2v-2h2v2zM11 12h-2v-2h2v2zM15 12h-2v-2h2v2zM11 19h-6v-6h6v6zM15 15h-2v-2h2v2zM15 18h-2v-2h2v2z'/>
			</IconBase>
		);
	}
}
