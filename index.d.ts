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
    interface Promises
    {
    	[key: string]: Promise<any>;
    }
    type Resolutions <GenericObject extends Promises> =
    {
        [GenericKey in keyof GenericObject]: Resolution <GenericObject, GenericKey>;
    };
	type Resolution <GenericObject extends Promises, GenericKey extends keyof GenericObject, GenericPromise = GenericObject[GenericKey]> = PromiseResolution<GenericPromise>;
    export function resolvePromises <GenericObject extends Promises> (object: GenericObject): Resolutions <GenericObject>;
}