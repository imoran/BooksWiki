import React from 'react'
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import Homepage from './components/homepage/Homepage';


const Router = () => (
	<Switch>
		<Route exact path="/" component={Homepage} />
	</Switch>
)


export default Router;
