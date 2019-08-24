'use strict';

/** Converts camelCase to dash-case. */
export function camelToDash(camel: string)
{
	let dash = '';
	for (let character of camel)
	{
		if (character === character.toUpperCase())
		{
			dash += '-' + character.toLowerCase();
		}
		else
		{
			dash += character;
		};
	};
	return dash;
};