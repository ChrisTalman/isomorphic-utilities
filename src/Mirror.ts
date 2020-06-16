'use strict';

// Types
import { Mirror } from '@chris-talman/types-helpers';
interface MirrorObject
{
	[key: string]: true;
};

/** Generates new object with each key and value having the same value as one another. */
export function mirror <GenericParameter extends MirrorObject | Array <GenericKey>, GenericKey extends string> (parameter: GenericParameter)
{
	const mirror = {} as GenericParameter extends Array <GenericKey> ? { [Key in GenericParameter[0]]: Key } : Mirror <GenericParameter>;
	if (parameter instanceof Array)
	{
		for (let value of parameter)
		{
			mirror[value] = parameter[value];
		};
	}
	else
	{
		const keys = Object.keys(parameter);
		for (let key of keys)
		{
			mirror[key] = key;
		};
		return mirror;
	};
	return mirror;
};