const React = require('react');
const IconBase = require('react-icon-base');

export default class EditorRtl extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M5.52 2h7.43c0.55 0 1 0.45 1 1s-0.45 1-1 1h-1v13c0 0.55-0.45 1-1 1s-1-0.45-1-1v-12c0-0.55-0.45-1-1-1s-1 0.45-1 1v12c0 0.55-0.45 1-1 1s-1-0.45-1-1v-5.96h-0.43c-2.5 0-4.52-2.020-4.52-4.52s2.020-4.52 4.52-4.52zM14 14l5-4-5-4v8z'/>
			</IconBase>
		);
	}
}
