import React from "react";
import ReactDOM from "react-dom";

class HelloWorld extends React.Component{
    render() {
        return ( 
        <p>Hello, {this.props.greetTarget}</p>
        );
    }
};

ReactDOM.render(
    <div>
        <HelloWorld greetTarget="Batman" />
        <HelloWorld greetTarget="Superman" />
        <HelloWorld greetTarget="Wonder Woman" />
    </div>,
    document.querySelector("#container")
);