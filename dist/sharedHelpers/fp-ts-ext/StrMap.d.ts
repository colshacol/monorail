import { StrMap } from 'fp-ts/lib/StrMap';
/**
 * StrMap constructor function
 *
 */
export declare const newStrMap: <A>(object: {
    [key: string]: A;
}) => StrMap<A>;
