const React = require('react');
const IconBase = require('react-icon-base');

export default class EditorPasteWord extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M12.38 2l2.62 3v1h-10v-1l2.64-3h4.74zM10 5c0.55 0 1-0.45 1-1s-0.45-1-1-1-1 0.45-1 1 0.45 1 1 1zM18 17v-12c0-0.55-0.45-1-1-1h-1.54l0.54 0.63v2.37h-12v-2.38l0.55-0.62h-1.55c-0.55 0-1 0.45-1 1v12c0 0.55 0.45 1 1 1h14c0.55 0 1-0.45 1-1zM15 9l-2 7h-2l-1-5-1 5h-2.080l-1.92-7h2l1 5 1-5h2l1 5 1-5h2z'/>
			</IconBase>
		);
	}
}
