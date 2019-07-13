declare module '@ChrisTalman/isomorphic-utilities'
{
	/** Generates new object with each key and value having the same value as one another. */
	export function mirror <GenericObject extends object> (object: GenericObject): Mirror<GenericObject>;
	export type Mirror <GenericObject> =
	{
		[GenericKey in keyof GenericObject]: GenericKey
	};
	/** Creates object from properties of existing object. */
	export function createSubsetObject <GenericSource extends object, GenericKey extends keyof GenericSource, GenericSubset extends Pick<GenericSource, GenericKey>> (source: GenericSource, keys: Array<GenericKey>): GenericSubset;
    /** Resolves promises in parallel. */
	import { PromiseResolution } from '@bluecewe/types-helpers';
    type Resolutions <GenericObject extends object> =
    {
        [GenericKey in keyof GenericObject]: GenericObject[GenericKey] extends Promise<any> ? Resolution <GenericObject, GenericKey> : GenericObject[GenericKey];
    };
	type Resolution <GenericObject extends object, GenericKey extends keyof GenericObject, GenericPromise = GenericObject[GenericKey]> = PromiseResolution<GenericPromise>;
    export function resolvePromises <GenericObject extends object> (object: GenericObject): Resolutions <GenericObject>;
	/** Generates sort method for use in array.sort(). */
	export function generateSort <Item> (itemCallback: (item: Item) => string | number, order?: 'ascending' | 'descending'): (alpha: Item, bravo: Item) => 1 | -1 | 0;
}