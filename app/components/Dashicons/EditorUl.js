const React = require('react');
const IconBase = require('react-icon-base');

export default class EditorUl extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M5.5 7c-0.83 0-1.5-0.67-1.5-1.5 0-0.82 0.67-1.5 1.5-1.5 0.82 0 1.5 0.68 1.5 1.5 0 0.83-0.68 1.5-1.5 1.5zM8 5h9v1h-9v-1zM5.5 12c-0.83 0-1.5-0.67-1.5-1.5 0-0.82 0.67-1.5 1.5-1.5 0.82 0 1.5 0.68 1.5 1.5 0 0.83-0.68 1.5-1.5 1.5zM8 10h9v1h-9v-1zM5.5 17c-0.83 0-1.5-0.67-1.5-1.5 0-0.82 0.67-1.5 1.5-1.5 0.82 0 1.5 0.68 1.5 1.5 0 0.83-0.68 1.5-1.5 1.5zM8 15h9v1h-9v-1z'/>
			</IconBase>
		);
	}
}
