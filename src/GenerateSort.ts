'use strict';

/** Generates sort method for use in array.sort(). */
export function generateSort <Item> (itemCallback: (item: Item) => string | number, order: 'ascending' | 'descending' = 'ascending')
{
	const greaterThan = order === 'ascending' ? 1 : -1;
	const lessThan = order === 'ascending' ? -1 : 1;
	const sort = (alpha: Item, bravo: Item) =>
	{
		if (itemCallback(alpha) > itemCallback(bravo)) return greaterThan;
		else if (itemCallback(alpha) < itemCallback(bravo)) return lessThan;
		else return 0;
	};
	return sort;
};