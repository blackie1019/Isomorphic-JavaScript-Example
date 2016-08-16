 var React = require('react');
 var dateHelper = require('../src/helper/date-helper');

 var IndexView = React.createClass({
	    render: function() {
	        return (
                    <html>
                        <head>
                            <meta charSet="UTF-8"/>
                            <title>{dateHelper.getShortDatetime()} </title>
                            <link src="stylesheets/style.css" />
                        </head>
                        <body>
                            <div id="app">
                            </div>
                            <script src="javascripts/bundle.js"></script>   
                        </body>
                    </html>
                );
	    }
    });

 module.exports = IndexView;
