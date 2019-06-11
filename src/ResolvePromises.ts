'use strict';

import { PromiseResolution } from '@bluecewe/types-helpers';

interface Promises
{
	[key: string]: Promise<any>;
};

type Resolutions <GenericObject extends Promises> =
{
    [GenericKey in keyof GenericObject]: Resolution <GenericObject, GenericKey>;
};

type Resolution <GenericObject extends Promises, GenericKey extends keyof GenericObject, GenericPromise = GenericObject[GenericKey]> = PromiseResolution<GenericPromise>;

export async function resolvePromises <GenericObject extends Promises> (object: GenericObject)
{
	const keys = Object.keys(object);
	const promises: Array<Promise<any>> = [];
	const resolutions = {} as Resolutions <GenericObject>;
	for (let key of keys)
	{
		const promise = object[key];
		const resolutionPromise = resolvePromise({key, promise, resolutions});
		promises.push(resolutionPromise);
	};
	await Promise.all(promises);
	return resolutions;
};

async function resolvePromise({key, promise, resolutions}: {key: string, promise: Promise<any>, resolutions: Resolutions<any>})
{
	const resolution = await promise;
	resolutions[key] = resolution;
};