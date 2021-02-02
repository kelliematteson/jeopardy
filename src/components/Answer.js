import React from 'react';

export default function Answer(props) {
	return (
		<div className="answer">
			<h3>What is: </h3>
			<h2>{props.question[0].answer}</h2>
		</div>
	);
}
