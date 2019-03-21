declare module '@ChrisTalman/isomorphic-utilities'
{
    /** Generates new object with each key and value having the same value as one another. */
    export function mirror <GenericObject extends object> (object: GenericObject): Mirror<GenericObject>;
    export type Mirror <GenericObject> =
    {
        [GenericKey in keyof GenericObject]: GenericKey
    };
    /** Creates object from properties of existing object. */
    export function createSubsetObject <GenericSource extends object, GenericKey extends keyof GenericSource, GenericSubset extends Pick<GenericSource, GenericKey>> (source: GenericSource, keys: Array<GenericKey>): GenericSubset;
}