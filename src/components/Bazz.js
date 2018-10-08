const React = require('react');
const { Component } = React;

class Bazz extends Component {
    render(){
        console.log(this);
        return (
            <div>
                <h1>{this.props.title}</h1>
                {this.props.children && <div>{this.props.children}</div>}
            </div>
        )
    }
}

export default Bazz
