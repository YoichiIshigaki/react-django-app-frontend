import React, { useContext } from "react";
import AppContext from "../contexts/AppContext";

const C = () => {
	const value = useContext(AppContext);

	console.log("useContext value is `", value,"`");
	return (
		<div>
			<h3>C</h3>
			{value}
		</div>
	);
};

export default C;
