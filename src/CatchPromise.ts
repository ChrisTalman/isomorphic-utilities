'use strict';

/**
	Awaits promise.
	If promise resolves, returns resolved value.
	If promise rejects, returns `undefined` and logs error.
*/
export async function catchPromise <GenericResolution> (promise: Promise <GenericResolution>)
{
	let resolution: GenericResolution;
	try
	{
		resolution = await promise;
	}
	catch (error)
	{
		console.error(error.stack || error);
		return;
	};
	return resolution;
};