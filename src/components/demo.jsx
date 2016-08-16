var React = require('react');
var ReactDOM = require('react-dom');
var dateHelper = require('../helper/date-helper.js');

var Demo = React.createClass({

    getInitialState: function() {
        return {
            dateTime : dateHelper.getShortDatetime()
        };
    },

    tick: function() {
        console.log('test');
        this.setState({dateTime : dateHelper.getShortDatetime()});
    },

    componentDidMount: function() {
        this.interval = setInterval(this.tick, 1000);
    },

    componentWillUnmount: function() {
        clearInterval(this.interval);
    },

    render: function() {
        return (
                <div>
                    <p>
                        Hello, world!I am a React App.
                    </p>
                    <p>
                        Time : {this.state.dateTime}
                    </p>
                </div>
            );
    }
});

ReactDOM.render(<Demo />, document.getElementById('app'));