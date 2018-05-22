import React from 'react'
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import Homepage from './components/homepage/Homepage';
import Dashboard from './components/dashboard/Dashboard';
import BookDetail from './components/book_detail/BookDetail';


const Router = () => (
	<Switch>
		<Route exact path="/" component={Homepage} />
		<Route exact path="/dashboard" component={Dashboard} />
		<Route exact path="/books/:bookId" component={BookDetail} />
	</Switch>
)


export default Router;
