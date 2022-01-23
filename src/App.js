import React, { useReducer } from "react";
import logo from "./logo.svg";
import "./App.css";
import AppContext from "./contexts/AppContext";

import Memo from "./components/Memo";

// import BasicUseEffect from './components/BasicUseEffect';
// import Basic2 from './components/Basic2';
// import TimerContainer from './components/TimerContainer';
// import ApiFetch from './components/ApiFetch';
// import BasicReducer from './components/BasicReducer';
// import B from './components/B';
// import CompB from "./components/CompB";

const initialState = 0;
const reducer = (currentState, action) => {
	switch (action) {
		case "add_1":
			return currentState + 1;
		case "multiple_3":
			return currentState * 3;
		case "reset":
			return initialState;
		default:
			return currentState;
	}
};

const App = () => {
	const [count, dispatch] = useReducer(reducer, initialState);

	return (
		<AppContext.Provider
			value={{ countProvided: count, dispatchProvided: dispatch }}
		>
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					{/* <BasicUseEffect/> */}
					{/* <Basic2/> */}
					{/* <TimerContainer/> */}
					{/* <ApiFetch/> */}
					{/* <B /> */}
					{/* <BasicReducer/> */}
					{/* <div>Count : {count}</div> */}
					{/* <CompB /> */}
          <Memo/>
				</header>
			</div>
		</AppContext.Provider>
	);
};

export default App;
