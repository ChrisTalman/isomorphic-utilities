declare module '@ChrisTalman/isomorphic-utilities'
{
    /** Generates new object with each key and value having the same value as one another. */
    export function mirror <GenericObject extends object> (object: GenericObject): Mirror<GenericObject>;
    export type Mirror <GenericObject> =
    {
        [GenericKey in keyof GenericObject]: GenericKey
    };
}