const React = require('react');
const IconBase = require('react-icon-base');

export default class AlignNone extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M3 5h14v-2h-14v2zM13 13v-6h-10v6h10zM3 17h14v-2h-14v2z'/>
			</IconBase>
		);
	}
}
