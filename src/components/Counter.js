import React, { useState } from 'react';

export default function Counter(props) {
	const [count, setCount] = useState(0);

	const increment = () => setCount(count + 1);
	const decrement = () => setCount(count - 1);
	const reset = () => setCount(count === 0);

	return (
		<div className="counter">
			<span>
				<h3>Score: {count}</h3>
			</span>
			<button className="score" onClick={increment}>
				+
			</button>
			<button className="score" onClick={decrement}>
				-
			</button>
			<button className="score" onClick={reset}>
				Reset
			</button>
		</div>
	);
}
