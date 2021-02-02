import React from 'react';

export default function Question(props) {
	return (
		<div className="question">
			<h2>Value</h2>
			<h2>{props.question[0].value}</h2>
			<h2>The Category:</h2>
			<h2>{props.question[0].category.title}</h2>
			<br />
			<h2>The Answer: </h2>
			<h2>{props.question[0].question}</h2>
			<br />
		</div>
	);
}
