'use strict';

/** Creates object from properties of existing object. */
export function createSubsetObject
<
	GenericSource extends object,
	GenericKey extends Extract<keyof GenericSource, string>,
	GenericSubset extends (GenericExclude extends true ? Omit<GenericSource, GenericKey> : Pick<GenericSource, GenericKey>),
	GenericExclude extends boolean = false
>
(source: GenericSource, keys: Array<GenericKey>, exclude?: GenericExclude)
{
	const subset = {} as GenericSubset;
	if (exclude)
	{
		for (let { 0: key, 1: value } of Object.entries(source))
		{
			if (keys.includes(key as any)) continue;
			subset[key] = value;
		};
	}
	else
	{
		for (let key of keys)
		{
			if (key in source)
			{
				(subset as any)[key] = source[key];
			};
		};
	};
	return subset;
};