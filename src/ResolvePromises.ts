'use strict';

import { PromiseResolution } from '@chris-talman/types-helpers';

type Resolutions <GenericObject extends object> =
{
    [GenericKey in keyof GenericObject]: GenericObject[GenericKey] extends Promise<any> ? Resolution <GenericObject, GenericKey> : GenericObject[GenericKey];
};

type Resolution <GenericObject extends object, GenericKey extends keyof GenericObject, GenericPromise = GenericObject[GenericKey]> = PromiseResolution<GenericPromise>;

export async function resolvePromises <GenericObject extends object> (object: GenericObject)
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