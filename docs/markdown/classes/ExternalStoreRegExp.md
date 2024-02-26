[@react-noui/external-store](../README.md) / [Exports](../modules.md) / ExternalStoreRegExp

# Class: ExternalStoreRegExp

## Hierarchy

- [`ExternalStore`](ExternalStore.md)\<`RegExp`\>

  ↳ **`ExternalStoreRegExp`**

## Table of contents

### Constructors

- [constructor](ExternalStoreRegExp.md#constructor)

### Properties

- [initialValue](ExternalStoreRegExp.md#initialvalue)
- [listeners](ExternalStoreRegExp.md#listeners)
- [value](ExternalStoreRegExp.md#value)

### Methods

- [emitChange](ExternalStoreRegExp.md#emitchange)
- [getSnapshot](ExternalStoreRegExp.md#getsnapshot)
- [reset](ExternalStoreRegExp.md#reset)
- [setValue](ExternalStoreRegExp.md#setvalue)
- [subscribe](ExternalStoreRegExp.md#subscribe)

## Constructors

### constructor

• **new ExternalStoreRegExp**(`...args`): [`ExternalStoreRegExp`](ExternalStoreRegExp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [pattern: string \| RegExp, flags?: string] |

#### Returns

[`ExternalStoreRegExp`](ExternalStoreRegExp.md)

#### Overrides

[ExternalStore](ExternalStore.md).[constructor](ExternalStore.md#constructor)

#### Defined in

[stores/ExternalStoreRegExp.ts:4](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreRegExp.ts#L4)

## Properties

### initialValue

• **initialValue**: `RegExp`

#### Inherited from

[ExternalStore](ExternalStore.md).[initialValue](ExternalStore.md#initialvalue)

#### Defined in

[stores/ExternalStore.ts:6](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStore.ts#L6)

___

### listeners

• **listeners**: () => `void`[] = `[]`

#### Inherited from

[ExternalStore](ExternalStore.md).[listeners](ExternalStore.md#listeners)

#### Defined in

[stores/ExternalStore.ts:7](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStore.ts#L7)

___

### value

• **value**: `RegExp`

#### Inherited from

[ExternalStore](ExternalStore.md).[value](ExternalStore.md#value)

#### Defined in

[stores/ExternalStore.ts:5](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStore.ts#L5)

## Methods

### emitChange

▸ **emitChange**(): `void`

#### Returns

`void`

#### Inherited from

[ExternalStore](ExternalStore.md).[emitChange](ExternalStore.md#emitchange)

#### Defined in

[stores/ExternalStore.ts:33](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStore.ts#L33)

___

### getSnapshot

▸ **getSnapshot**(): `RegExp`

#### Returns

`RegExp`

#### Inherited from

[ExternalStore](ExternalStore.md).[getSnapshot](ExternalStore.md#getsnapshot)

#### Defined in

[stores/ExternalStore.ts:20](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStore.ts#L20)

___

### reset

▸ **reset**(`...args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`void`

#### Inherited from

[ExternalStore](ExternalStore.md).[reset](ExternalStore.md#reset)

#### Defined in

[stores/ExternalStore.ts:29](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStore.ts#L29)

___

### setValue

▸ **setValue**(`...args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [pattern: string \| RegExp, flags?: string] |

#### Returns

`void`

#### Overrides

[ExternalStore](ExternalStore.md).[setValue](ExternalStore.md#setvalue)

#### Defined in

[stores/ExternalStoreRegExp.ts:8](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreRegExp.ts#L8)

___

### subscribe

▸ **subscribe**(`listener`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | () => `void` |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Inherited from

[ExternalStore](ExternalStore.md).[subscribe](ExternalStore.md#subscribe)

#### Defined in

[stores/ExternalStore.ts:13](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStore.ts#L13)
