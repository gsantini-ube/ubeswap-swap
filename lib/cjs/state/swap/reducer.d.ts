import { Field } from './actions';
export interface SwapState {
    readonly independentField: Field;
    readonly typedValue: string;
    readonly [Field.INPUT]: {
        readonly currencyId: string | undefined;
    };
    readonly [Field.OUTPUT]: {
        readonly currencyId: string | undefined;
    };
    readonly recipient: string | null;
}
declare const _default: import("redux").Reducer<SwapState, import("redux").AnyAction>;
export default _default;
