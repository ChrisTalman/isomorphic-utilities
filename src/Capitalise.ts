'use strict';

/** Capitalises the first letter of each word. */
export function capitalise(text: string)
{
	const words = text.split(' ');
	const capitalisedWords: Array<string> = [];
	for (let word of words)
	{
		const capitalisedWord = (word[0] || '').toUpperCase() + word.slice(1);
		capitalisedWords.push(capitalisedWord);
	};
	const capitalised = capitalisedWords.join(' ');
	return capitalised;
};