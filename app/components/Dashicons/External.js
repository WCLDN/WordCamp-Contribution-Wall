const React = require('react');
const IconBase = require('react-icon-base');

export default class External extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M9 3h8v8l-2-1v-3.080l-5.6 5.59-1.41-1.41 6.090-6.1h-4.080zM12 15v-3l2-2v7h-11v-11h8l-2 2h-4v7h7z'/>
			</IconBase>
		);
	}
}
