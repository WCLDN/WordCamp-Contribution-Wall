const React = require('react');
const IconBase = require('react-icon-base');

export default class EditorPasteText extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M12.38 2l2.62 3v1h-10v-1l2.64-3h4.74zM10 5c0.55 0 1-0.44 1-1 0-0.55-0.45-1-1-1s-1 0.45-1 1c0 0.56 0.45 1 1 1zM15.45 4h1.55c0.55 0 1 0.45 1 1v12c0 0.56-0.45 1-1 1h-14c-0.55 0-1-0.44-1-1v-12c0-0.55 0.45-1 1-1h1.55l-0.55 0.63v2.37h12v-2.37zM14 11v-2h-8v2h3v5h2v-5h3z'/>
			</IconBase>
		);
	}
}
