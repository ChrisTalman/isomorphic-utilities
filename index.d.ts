declare module '@chris-talman/isomorphic-utilities'
{
	/** Generates new object with each key and value having the same value as one another. */
	export function mirror <GenericParameter extends MirrorObject | Array <GenericKey>, GenericKey extends string> (parameter: GenericParameter): GenericParameter extends Array <GenericKey> ? { [Key in GenericParameter[0]]: Key } : Mirror <GenericParameter>;
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
	export function resolvePromises <GenericObject extends object> (object: GenericObject): Promise<Resolutions <GenericObject>>;
	import { PromiseResolution } from '@chris-talman/types-helpers';
	type Resolutions <GenericObject extends object> =
	{
		[GenericKey in keyof GenericObject]: GenericObject[GenericKey] extends Promise<any> ? Resolution <GenericObject, GenericKey> : GenericObject[GenericKey];
	};
	type Resolution <GenericObject extends object, GenericKey extends keyof GenericObject, GenericPromise = GenericObject[GenericKey]> = PromiseResolution<GenericPromise>;

	/** Generates sort method for use in array.sort(). */
	export function generateSort <Item> (itemCallback: (item: Item) => string | number, order?: 'ascending' | 'descending'): (alpha: Item, bravo: Item) => 1 | -1 | 0;

	/** Generates promise which resolves once given milliseconds have elapsed. */
	export function delay(milliseconds: number): Promise<void>;

	/**
		Awaits promise.
		If promise resolves, returns resolved value.
		If promise rejects, returns `undefined` and logs error.
	*/
	export function catchPromise <GenericResolution> (promise: Promise <GenericResolution>): Promise<GenericResolution>;

	/** Returns size of Base64 string in given unit. */
	export function base64Size({value, unit}: {value: string, unit: 'bytes' | 'kilobytes'}): number;

	/** Capitalises the first letter of each word. */
	export function capitalise(text: string): string;

	/** Converts `camelCase` to `dash-case`. */
	export function camelToDash(camel: string): string;

	/** Converts `dash-case` to `camelCase`. */
	export function dashToCamel(dash: string): string;

	/** Generates a `Promise` and provides an interface to access and control it. */
	export class PromiseController <GenericResolution = any, GenericRejection = any>
	{
		public readonly promise: Promise <GenericResolution>;
		constructor();
		resolve(value: GenericResolution): void;
		reject(reason: GenericRejection): void;
	}

	/** Generates random integer within range. */
	export function getRangeRandomInteger(lower: number, upper: number): number;

	/** Shuffles an array using swap algorithm. */
	export function swapShuffle <GenericItem> (unshuffled: Array <GenericItem>): Array <GenericItem>;
}