declare module '@ChrisTalman/isomorphic-utilities'
{
	/** Generates new object with each key and value having the same value as one another. */
	export function mirror <GenericObject extends MirrorObject> (object: GenericObject): Mirror<GenericObject>;
	export type Mirror <GenericObject> =
	{
		[GenericKey in keyof GenericObject]: GenericKey
	};
	interface MirrorObject
	{
		[key: string]: true;
	}

	/** Creates object from properties of existing object. */
	export function createSubsetObject
	<
		GenericSource extends object,
		GenericKey extends Extract<keyof GenericSource, string>,
		GenericSubset extends (GenericExclude extends true ? Omit<GenericSource, GenericKey> : Pick<GenericSource, GenericKey>),
		GenericExclude extends boolean = false
	>
	(source: GenericSource, keys: Array<GenericKey>, exclude?: GenericExclude): GenericSubset;

    /** Resolves promises in parallel. */
	import { PromiseResolution } from '@ChrisTalman/types-helpers';
    type Resolutions <GenericObject extends object> =
    {
        [GenericKey in keyof GenericObject]: GenericObject[GenericKey] extends Promise<any> ? Resolution <GenericObject, GenericKey> : GenericObject[GenericKey];
    };
	type Resolution <GenericObject extends object, GenericKey extends keyof GenericObject, GenericPromise = GenericObject[GenericKey]> = PromiseResolution<GenericPromise>;

    export function resolvePromises <GenericObject extends object> (object: GenericObject): Resolutions <GenericObject>;
	/** Generates sort method for use in array.sort(). */
	export function generateSort <Item> (itemCallback: (item: Item) => string | number, order?: 'ascending' | 'descending'): (alpha: Item, bravo: Item) => 1 | -1 | 0;

	/** Generates promise which resolves once given milliseconds have elapsed. */
	export function delay(milliseconds: number): Promise<void>;

	/** Converts camelCase to dash-case. */
	export function camelToDash(camel: string): string;

	/** Generates a `Promise` and provides an interface to access and control it. */
	export class PromiseController <GenericResolution = any, GenericRejection = any>
	{
		public readonly promise: Promise <GenericResolution>;
		constructor();
		resolve(value: GenericResolution): void;
		reject(reason: GenericRejection): void;
	}
}