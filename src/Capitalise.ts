'use strict';

/** Capitalises the first letter of each word. */
export function capitalise(text: string)
{
	const words = text.split(' ');
	const capitalisedWords: Array<string> = [];
	for (let word of words)
	{
		const characters = (word || '').split('');
		for (let characterIndex = 0; characterIndex < characters.length; characterIndex++)
		{
			characters[characterIndex] = characterIndex === 0 ? characters[characterIndex].toUpperCase() : characters[characterIndex].toLowerCase();
		};
		const capitalisedWord = characters.join('');
		capitalisedWords.push(capitalisedWord);
	};
	const capitalised = capitalisedWords.join(' ');
	return capitalised;
};