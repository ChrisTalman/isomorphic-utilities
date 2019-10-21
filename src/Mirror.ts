'use strict';

// Types
export type Mirror <GenericObject extends MirrorObject> =
{
    [GenericKey in keyof GenericObject]: GenericKey
};
interface MirrorObject
{
	[key: string]: true;
};

/** Generates new object with each key and value having the same value as one another. */
export function mirror <GenericObject extends MirrorObject> (object: GenericObject)
{
    const mirror = {} as Mirror<GenericObject>;
    const keys = Object.keys(object);
    for (let key of keys)
    {
        mirror[key as keyof GenericObject] = key;
    };
    return mirror;
};