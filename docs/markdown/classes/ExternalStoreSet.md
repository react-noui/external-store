[@react-noui/external-store](../README.md) / [Exports](../modules.md) / ExternalStoreSet

# Class: ExternalStoreSet\<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`ExternalStore`](ExternalStore.md)\<`Set`\<`T`\>\>

  ↳ **`ExternalStoreSet`**

## Table of contents

### Constructors

- [constructor](ExternalStoreSet.md#constructor)

### Properties

- [initialValue](ExternalStoreSet.md#initialvalue)
- [listeners](ExternalStoreSet.md#listeners)
- [value](ExternalStoreSet.md#value)

### Methods

- [add](ExternalStoreSet.md#add)
- [clear](ExternalStoreSet.md#clear)
- [delete](ExternalStoreSet.md#delete)
- [emitChange](ExternalStoreSet.md#emitchange)
- [getSnapshot](ExternalStoreSet.md#getsnapshot)
- [reset](ExternalStoreSet.md#reset)
- [setValue](ExternalStoreSet.md#setvalue)
- [subscribe](ExternalStoreSet.md#subscribe)

## Constructors

### constructor

• **new ExternalStoreSet**\<`T`\>(`initialValue`): [`ExternalStoreSet`](ExternalStoreSet.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialValue` | `Set`\<`T`\> |

#### Returns

[`ExternalStoreSet`](ExternalStoreSet.md)\<`T`\>

#### Inherited from

[ExternalStore](ExternalStore.md).[constructor](ExternalStore.md#constructor)

#### Defined in

[stores/ExternalStore.ts:9](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStore.ts#L9)

## Properties

### initialValue

• **initialValue**: `Set`\<`T`\>

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

• **value**: `Set`\<`T`\>

#### Inherited from

[ExternalStore](ExternalStore.md).[value](ExternalStore.md#value)

#### Defined in

[stores/ExternalStore.ts:5](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStore.ts#L5)

## Methods

### add

▸ **add**(`...args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `T`[] |

#### Returns

`void`

#### Defined in

[stores/ExternalStoreSet.ts:4](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreSet.ts#L4)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[stores/ExternalStoreSet.ts:12](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreSet.ts#L12)

___

### delete

▸ **delete**(`...args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [value: T] |

#### Returns

`void`

#### Defined in

[stores/ExternalStoreSet.ts:18](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreSet.ts#L18)

___

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

▸ **getSnapshot**(): `Set`\<`T`\>

#### Returns

`Set`\<`T`\>

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

▸ **setValue**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Set`\<`T`\> |

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
