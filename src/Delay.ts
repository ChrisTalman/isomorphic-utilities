'use strict';

/** Generates promise which resolves once given milliseconds have elapsed. */
export function delay(milliseconds: number)
{
	const promise = new Promise(resolve => setTimeout(resolve, milliseconds));
	return promise;
};