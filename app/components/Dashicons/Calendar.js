const React = require('react');
const IconBase = require('react-icon-base');

export default class Calendar extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M15 4h3v14h-16v-14h3v-1c0-0.83 0.67-1.5 1.5-1.5s1.5 0.67 1.5 1.5v1h4v-1c0-0.83 0.67-1.5 1.5-1.5s1.5 0.67 1.5 1.5v1zM6 3v2.5c0 0.28 0.22 0.5 0.5 0.5s0.5-0.22 0.5-0.5v-2.5c0-0.28-0.22-0.5-0.5-0.5s-0.5 0.22-0.5 0.5zM13 3v2.5c0 0.28 0.22 0.5 0.5 0.5s0.5-0.22 0.5-0.5v-2.5c0-0.28-0.22-0.5-0.5-0.5s-0.5 0.22-0.5 0.5zM17 17v-9h-14v9h14zM7 16v-7h-2v7h2zM11 16v-7h-2v7h2zM15 16v-7h-2v7h2z'/>
			</IconBase>
		);
	}
}
