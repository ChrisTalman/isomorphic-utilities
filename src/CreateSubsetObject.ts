'use strict';

/** Creates object from properties of existing object. */
export function createSubsetObject <GenericSource extends object, GenericKey extends keyof GenericSource, GenericSubset extends Pick<GenericSource, GenericKey>> (source: GenericSource, keys: Array<GenericKey>)
{
	const subset = {} as GenericSubset;
	for (let key of keys)
	{
		if (key in source)
		{
			(subset as any)[key] = source[key];
		};
	};
	return subset;
};