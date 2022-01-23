import React, { useState, useMemo } from "react";

const Memo = () => {
	const [count1, setCount1] = useState(0);
	const [count2, setCount2] = useState(0);

	const addCount1 = () => {
		setCount1((prevCount1) => prevCount1 + 1);
	};

	const addCount2 = () => {
		setCount2((prevCount2) => prevCount2 + 1);
	};

	// const isOdd = () => {
	// 	let i = 0;
	// 	while (i < 500000000) {
	// 		i++;
	// 	}
	// 	return count1 % 2 != 0;
	// };

	const isOdd = useMemo(() => {
		let i = 0;
		while (i < 500000000) {
			i++;
		}
		return count1 % 2 != 0;
        // 第２引数に何の変数が変化したときに、再計算するか記載する。
	}, [count1]);

	return (
		<div>
			<button onClick={addCount1}> Count1 : {count1} </button>
			<span style={{ display: "block" }}>
				{isOdd ? "Odd number" : "Even number"}{" "}
			</span>
			<button onClick={addCount2}> Count2 : {count2} </button>
		</div>
	);
};

export default Memo;
