//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { Theme, Button, Filter } from "../../../dist/index.js";
//render your react application
ReactDOM.render(
	<Theme.Provider>
		<h1>Hello</h1>
		<Button iconName={null}>Hello</Button>
		<Filter
			label={"Gender"}
			placeholder={"Select one gender"}
			options={[
				{ label: "Male", value: "male" },
				{ label: "Female", value: "female" }
			]}
		/>
	</Theme.Provider>,
	document.querySelector("#app")
);
