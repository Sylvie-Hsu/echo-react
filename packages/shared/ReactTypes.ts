export type Type = any; // eslint-disable-line @typescript-eslint/no-explicit-any
export type Key = any; // eslint-disable-line @typescript-eslint/no-explicit-any
export type Ref = any; // eslint-disable-line @typescript-eslint/no-explicit-any
export type Props = any; // eslint-disable-line @typescript-eslint/no-explicit-any
export type ElementType = any; // eslint-disable-line @typescript-eslint/no-explicit-any

export interface ReactElementType {
	$$typeof: symbol | number;
	type: Type;
	key: Key;
	props: Props;
	ref: Ref;
	__mark: string;
}
