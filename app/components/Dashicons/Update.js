const React = require('react');
const IconBase = require('react-icon-base');

export default class Update extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M10.2 3.28c3.53 0 6.43 2.61 6.92 6h2.080l-3.5 4-3.5-4h2.32c-0.45-1.97-2.21-3.45-4.32-3.45-1.45 0-2.73 0.71-3.54 1.78l-1.71-1.95c1.28-1.46 3.16-2.38 5.25-2.38zM9.8 16.72c-3.52 0-6.43-2.61-6.92-6h-2.080l3.5-4c1.17 1.33 2.33 2.67 3.5 4h-2.32c0.45 1.97 2.21 3.45 4.32 3.45 1.45 0 2.73-0.71 3.54-1.78l1.71 1.95c-1.28 1.46-3.15 2.38-5.25 2.38z'/>
			</IconBase>
		);
	}
}
