'use strict';

// Internal Modules
import { getRangeRandomInteger } from './RangeRandomInteger';

/** Shuffles an array using swap algorithm. */
export function swapShuffle <GenericItem> (unshuffled: Array <GenericItem>)
{
	const shuffled = Array.from(unshuffled);
	for (let index = 0; index < shuffled.length; index++)
	{
		const currentValue = shuffled[index];
		const randomIndex = getRangeRandomInteger(0, unshuffled.length - 1);
		const randomValue = shuffled[randomIndex];
		shuffled[randomIndex] = currentValue;
		shuffled[index] = randomValue;
	};
	return shuffled;
};