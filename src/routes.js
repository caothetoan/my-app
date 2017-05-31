var IndexRoute = require('react-router/lib/IndexRoute')
var React = require('react')
var Route = require('react-router/lib/Route')
//var Item = require('./Item')
// Polyfill require.ensure
if (typeof require.ensure !== 'function') require.ensure = function (d, c) { c(require) }

var App = require('./App')

var TodoApp = require('./TodoApp')


function stories(route, type, limit, title) {
    return React.createClass({
        render() {
            return <TodoApp {...this.props} key={route} route={route} type={type} limit={limit} title={title} />
        }
    })
}


var Ask = stories('ask', 'askstories', 200, 'Ask')
//var Comments = updates('comments')
var Jobs = stories('jobs', 'jobstories', 200, 'Jobs')
var New = stories('newest', 'newstories', 500, 'New Links')
var Show = stories('show', 'showstories', 200, 'Show')
var Top = stories('news', 'topstories', 500)

module.exports = <Route path="/" component={App}>
    <IndexRoute component={Top} />
    <Route path="news" component={Top} />
    
</Route>
