'use strict';

/** Generates random integer within range. */
export function getRangeRandomInteger(lower: number, upper: number)
{
	const integer = Math.floor(Math.random() * (upper - lower + 1)) + lower;
	return integer;
};