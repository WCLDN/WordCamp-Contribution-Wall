import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, Redirect, browserHistory} from 'react-router';

import App from './containers/App';
import List from './containers/List';
import New from './containers/New';
import Filter from './containers/Filter';

render((
	<Router history={browserHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={List}/>
			<Route path='new' component={New}/>
			<Route path='filter' component={Filter}>
				<Route path='/filter/:team' component={Filter}/>
			</Route>
			<Redirect from='*' to='/' />
		</Route>
	</Router>
), document.getElementById('root'));
