const React = require('react');
const IconBase = require('react-icon-base');

export default class Testimonial extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M4 3h12c0.55 0 1.020 0.2 1.41 0.59s0.59 0.86 0.59 1.41v7c0 0.55-0.2 1.020-0.59 1.41s-0.86 0.59-1.41 0.59h-1l-5 5v-5h-6c-0.55 0-1.020-0.2-1.41-0.59s-0.59-0.86-0.59-1.41v-7c0-0.55 0.2-1.020 0.59-1.41s0.86-0.59 1.41-0.59zM15 5h-11v1h11v-1zM16 8h-12v1h12v-1zM13 11h-9v1h9v-1z'/>
			</IconBase>
		);
	}
}
