var Counter = React.createClass({

    getInitialState: function() {
        return {

            counter: 0
        };

    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },



    render: function() {
        return (
            React.createElement('div', { className: 'counter' },
                React.createElement('h2', {}, ""),
                React.createElement('span', {}, 'Licznik: ' + this.state.counter),
                React.createElement('div', {},
                    React.createElement('button', {
                        className: 'incr_button',
                        onClick: this.increment
                    }, 'dodaj '),

                    React.createElement('button', {
                        onClick: this.decrement
                    }, 'odejmij ')
                )
            )
        );
    }
});

var element = React.createElement('div', { className: 'counters' },
    React.createElement('h1', {}, 'Licznik'),
    React.createElement(Counter)

);

ReactDOM.render(element, document.getElementById('script'));