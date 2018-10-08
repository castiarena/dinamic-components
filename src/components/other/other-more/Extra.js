const React = require('react');
const { Component } = React;

class Extra extends Component {
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
                {this.props.children && <div>{this.props.children}</div>}
            </div>
        )
    }
}

export default Extra
