[@react-noui/external-store](../README.md) / [Exports](../modules.md) / ExternalStoreArray

# Class: ExternalStoreArray\<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`ExternalStore`](ExternalStore.md)\<`T`[]\>

  ↳ **`ExternalStoreArray`**

  ↳↳ [`ExternalStoreCollection`](ExternalStoreCollection.md)

## Table of contents

### Constructors

- [constructor](ExternalStoreArray.md#constructor)

### Properties

- [initialValue](ExternalStoreArray.md#initialvalue)
- [listeners](ExternalStoreArray.md#listeners)
- [value](ExternalStoreArray.md#value)

### Methods

- [emitChange](ExternalStoreArray.md#emitchange)
- [getSnapshot](ExternalStoreArray.md#getsnapshot)
- [pop](ExternalStoreArray.md#pop)
- [push](ExternalStoreArray.md#push)
- [reset](ExternalStoreArray.md#reset)
- [setValue](ExternalStoreArray.md#setvalue)
- [shift](ExternalStoreArray.md#shift)
- [splice](ExternalStoreArray.md#splice)
- [subscribe](ExternalStoreArray.md#subscribe)
- [unshift](ExternalStoreArray.md#unshift)

## Constructors

### constructor

• **new ExternalStoreArray**\<`T`\>(`initialValue`): [`ExternalStoreArray`](ExternalStoreArray.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialValue` | `T`[] |

#### Returns

[`ExternalStoreArray`](ExternalStoreArray.md)\<`T`\>

#### Inherited from

[ExternalStore](ExternalStore.md).[constructor](ExternalStore.md#constructor)

#### Defined in

[stores/ExternalStore.ts:9](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStore.ts#L9)

## Properties

### initialValue

• **initialValue**: `T`[]

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

• **value**: `T`[]

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

▸ **getSnapshot**(): `T`[]

#### Returns

`T`[]

#### Inherited from

[ExternalStore](ExternalStore.md).[getSnapshot](ExternalStore.md#getsnapshot)

#### Defined in

[stores/ExternalStore.ts:20](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStore.ts#L20)

___

### pop

▸ **pop**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### Defined in

[stores/ExternalStoreArray.ts:10](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreArray.ts#L10)

___

### push

▸ **push**(`...args`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `T`[] |

#### Returns

`number`

#### Defined in

[stores/ExternalStoreArray.ts:4](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreArray.ts#L4)

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

▸ **setValue**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T`[] |

#### Returns

`void`

#### Inherited from

[ExternalStore](ExternalStore.md).[setValue](ExternalStore.md#setvalue)

#### Defined in

[stores/ExternalStore.ts:24](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStore.ts#L24)

___

### shift

▸ **shift**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### Defined in

[stores/ExternalStoreArray.ts:16](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreArray.ts#L16)

___

### splice

▸ **splice**(`...args`): `T`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [start: number, deleteCount: number, ...items: T[]] |

#### Returns

`T`[]

#### Defined in

[stores/ExternalStoreArray.ts:28](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreArray.ts#L28)

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

### unshift

▸ **unshift**(`...args`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `T`[] |

#### Returns

`number`

#### Defined in

[stores/ExternalStoreArray.ts:22](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreArray.ts#L22)
