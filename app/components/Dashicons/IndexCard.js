const React = require('react');
const IconBase = require('react-icon-base');

export default class IndexCard extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M1 3.17v14.83h18v-14h-11v-0.83c0-0.32-0.12-0.6-0.35-0.83s-0.51-0.34-0.83-0.34h-4.64c-0.33 0-0.6 0.11-0.83 0.34-0.24 0.23-0.35 0.51-0.35 0.83zM10 6v2h-7v-2h7zM17 6v10h-5v-10h5zM10 10v2h-7v-2h7zM10 14v2h-7v-2h7z'/>
			</IconBase>
		);
	}
}
