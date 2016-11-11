const React = require('react');
const IconBase = require('react-icon-base');

export default class PostStatus extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M14 6c0 1.86-1.28 3.41-3 3.86v6.14c0 1-2 2-2 2v-8.14c-1.72-0.45-3-2-3-3.86 0-2.21 1.79-4 4-4s4 1.79 4 4zM8 5c0 0.55 0.45 1 1 1s1-0.45 1-1-0.45-1-1-1-1 0.45-1 1z'/>
			</IconBase>
		);
	}
}
