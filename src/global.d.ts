// Set Timeout
declare function setTimeout(callback: Function, milliseconds: number): any;

// Console
declare const console: Console;
interface Console
{
	log: (... values: Array<string>) => void;
	warn: (... values: Array<string>) => void;
	error: (... values: Array<string>) => void;
}