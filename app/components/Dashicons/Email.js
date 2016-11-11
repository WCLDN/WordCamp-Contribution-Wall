const React = require('react');
const IconBase = require('react-icon-base');

export default class Email extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M3.87 4h13.25c1.25 0 1.88 0.59 1.88 1.79v8.42c0 1.19-0.63 1.79-1.88 1.79h-13.25c-1.25 0-1.88-0.6-1.88-1.79v-8.42c0-1.2 0.63-1.79 1.88-1.79zM10.49 12.6l6.74-5.53c0.24-0.2 0.43-0.66 0.13-1.070-0.29-0.41-0.82-0.42-1.17-0.17l-5.7 3.86-5.69-3.86c-0.35-0.25-0.88-0.24-1.17 0.17-0.3 0.41-0.11 0.87 0.13 1.070z'/>
			</IconBase>
		);
	}
}
