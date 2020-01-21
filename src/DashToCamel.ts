'use strict';

/** Converts `dash-case` to `camelCase`. */
export function dashToCamel(dash: string)
{
	let camel = '';
	let upperCaseNextCharacter = false;
	for (let characterIndex = 0; characterIndex < dash.length; characterIndex++)
	{
		const character = dash[characterIndex];
		if (character === '-')
		{
			upperCaseNextCharacter = camel.length > 0;
		}
		else
		{
			if (upperCaseNextCharacter)
			{
				camel += character.toUpperCase();
				upperCaseNextCharacter = false;
			}
			else
			{
				camel += character;
			};
		};
	};
	return camel;
};