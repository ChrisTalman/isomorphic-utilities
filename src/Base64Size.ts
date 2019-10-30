'use strict';

/** Returns size of Base64 string in given unit. */
export function base64Size({value, unit}: {value: string, unit: 'bytes' | 'kilobytes'})
{
	let size = value.length * (3 / 4);
	if (unit === 'kilobytes')
	{
		size = size / 1024;
	};
	return size;
};