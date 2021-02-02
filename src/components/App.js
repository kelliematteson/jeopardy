import React, { useEffect, useState } from 'react';
import Counter from './Counter';
import Question from './Question';
import Answer from './Answer';

export default function App(props) {
	const [getQuestion, setGetQuestion] = useState(false);
	const [revealAnswer, setRevealAnswer] = useState(false);
	const [query, updateQuery] = useState({
		searchURL: 'https://jservice.io/api/random'
	});
	const [question, setQuestion] = useState({});
	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(query.searchURL);
				const data = await response.json();
				await setQuestion(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, [getQuestion]);

	const handleGetQuestion = () => {
		if (getQuestion === false) {
			setGetQuestion(true);
		} else {
			setGetQuestion(false);
		}
	};
	const handleRevealAnswer = () => {
		if (revealAnswer === false && getQuestion === true) {
			setRevealAnswer(true);
		} else {
			setRevealAnswer(false);
		}
	};

	return (
		<div className="app">
			<div className="Page-wrapper">
				<h1>JEOPARDY!</h1>
				<Counter />
				<div className="questions">
					<button onClick={handleGetQuestion}>Get an Answer!</button>
					{getQuestion === true ? <Question question={question} /> : ''}
					<button onClick={handleRevealAnswer}>Reveal the Question!</button>
					{revealAnswer === true ? <Answer question={question} /> : ''}
				</div>
			</div>
		</div>
	);
}
