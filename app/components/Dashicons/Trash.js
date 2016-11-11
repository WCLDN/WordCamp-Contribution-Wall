const React = require('react');
const IconBase = require('react-icon-base');

export default class Trash extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M12 4h3c0.55 0 1 0.45 1 1v1h-13v-1c0-0.55 0.45-1 1-1h3c0.23-1.14 1.29-2 2.5-2s2.27 0.86 2.5 2zM8 4h3c-0.21-0.58-0.85-1-1.5-1s-1.29 0.42-1.5 1zM4 7h11v10c0 0.55-0.45 1-1 1h-9c-0.55 0-1-0.45-1-1v-10zM7 16v-7h-1v7h1zM10 16v-7h-1v7h1zM13 16v-7h-1v7h1z'/>
			</IconBase>
		);
	}
}
