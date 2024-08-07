// display random quote when it rerender or refresh
import React from 'react'

function RandomQuote() {

	let quotes = [
		" Avoid daydreaming about the years to come.", "You are the most important person in your whole life.", "Always be true to who you are, and ignore what other people have to say about you.", "Always be true to who you are, and ignore what other people have to say about you.", "Only demonstrate your strength when it’s really required."
	]
	const randomIndex = Math.floor(Math.random() * quotes.length);
	const quote = quotes[randomIndex]
	return (
		<div className='randomquote'>{quote}</div>
	)
}

export default RandomQuote