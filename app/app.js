// this pulls in react dependencies 
var React = require("react");
var ReactDOM = require("react-dom");

// this pulls in the main file
var Main = require("./components/Main");

// this grabs the element "app" and renders Main in it
ReactDOM.render(<Main />, document.getElementById("app"));
