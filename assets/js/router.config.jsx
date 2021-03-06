var React =  require('react');
var Router =  require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var RouteHandler = Router.RouteHandler;
var css = require('../css/app.css');

//layout
var Home = require('./home/home.jsx');
var Footer = require('./footer/footer.jsx');

//routes;
var NotFound = require('./notfound.jsx');

var App = React.createClass({
	render: function() {
		return (
			<div className="fullheight site-wrapper">
				<div className="container site-container full-height">
					<RouteHandler/>
				</div>
				<Footer/>
			</div>
		);
	}
});


module.exports = (
	<Route handler={App} name="app" className="full-height" path="/">
		<DefaultRoute handler={Home} />
		<NotFoundRoute handler={NotFound}/> 
	</Route>
);
