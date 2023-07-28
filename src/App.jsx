import React from "react";
import ReactDOM from "react-dom";
import ColorList from "./components/ColorList";

const App = () => (
	<>
		<ColorList colorList={[]} />
		<ColorList colorList={["#2dd3d3", "#ff21d3", "#1f12a3"]} />
	</>
);
ReactDOM.render(<App />, document.getElementById("app"));
