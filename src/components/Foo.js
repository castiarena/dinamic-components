const React = require('react');
const { Component } = React;

class Foo extends Component {
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                {this.props.children && <div>{this.props.children}</div>}
            </div>
        )
    }
}

module.exports = Foo;

