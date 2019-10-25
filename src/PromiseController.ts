'use strict';

/** Generates a `Promise` and provides an interface to access and control it. */
export class PromiseController <GenericResolution = any, GenericRejection = any>
{
	public readonly promise: Promise <GenericResolution>;
	private _resolve: (value: GenericResolution) => void;
	private _reject: (reason: GenericRejection) => void;
	constructor()
	{
		this.promise = new Promise
		(
			(resolve, reject) =>
			{
				this.resolve = resolve;
				this.reject = reject;
			}
		);
	};
	resolve(value: GenericResolution)
	{
		this._resolve(value);
	};
	reject(reason: GenericRejection)
	{
		this._reject(reason);
	};
};