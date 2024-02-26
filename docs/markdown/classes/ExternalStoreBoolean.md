[@react-noui/external-store](../README.md) / [Exports](../modules.md) / ExternalStoreBoolean

# Class: ExternalStoreBoolean

## Hierarchy

- [`ExternalStore`](ExternalStore.md)\<`boolean`\>

  ↳ **`ExternalStoreBoolean`**

## Table of contents

### Constructors

- [constructor](ExternalStoreBoolean.md#constructor)

### Properties

- [initialValue](ExternalStoreBoolean.md#initialvalue)
- [listeners](ExternalStoreBoolean.md#listeners)
- [value](ExternalStoreBoolean.md#value)

### Methods

- [emitChange](ExternalStoreBoolean.md#emitchange)
- [getSnapshot](ExternalStoreBoolean.md#getsnapshot)
- [reset](ExternalStoreBoolean.md#reset)
- [setFalse](ExternalStoreBoolean.md#setfalse)
- [setTrue](ExternalStoreBoolean.md#settrue)
- [setValue](ExternalStoreBoolean.md#setvalue)
- [subscribe](ExternalStoreBoolean.md#subscribe)
- [toggle](ExternalStoreBoolean.md#toggle)

## Constructors

### constructor

• **new ExternalStoreBoolean**(`initialValue`): [`ExternalStoreBoolean`](ExternalStoreBoolean.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialValue` | `boolean` |

#### Returns

[`ExternalStoreBoolean`](ExternalStoreBoolean.md)

#### Inherited from

[ExternalStore](ExternalStore.md).[constructor](ExternalStore.md#constructor)

#### Defined in

[stores/ExternalStore.ts:9](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStore.ts#L9)

## Properties

### initialValue

• **initialValue**: `boolean`

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

• **value**: `boolean`

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

▸ **getSnapshot**(): `boolean`

#### Returns

`boolean`

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

### setFalse

▸ **setFalse**(): `void`

#### Returns

`void`

#### Defined in

[stores/ExternalStoreBoolean.ts:12](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreBoolean.ts#L12)

___

### setTrue

▸ **setTrue**(): `void`

#### Returns

`void`

#### Defined in

[stores/ExternalStoreBoolean.ts:8](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreBoolean.ts#L8)

___

### setValue

▸ **setValue**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

[ExternalStore](ExternalStore.md).[setValue](ExternalStore.md#setvalue)

#### Defined in

[stores/ExternalStore.ts:24](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStore.ts#L24)

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

___

### toggle

▸ **toggle**(): `void`

#### Returns

`void`

#### Defined in

[stores/ExternalStoreBoolean.ts:4](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreBoolean.ts#L4)
