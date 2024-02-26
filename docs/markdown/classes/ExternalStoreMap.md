[@react-noui/external-store](../README.md) / [Exports](../modules.md) / ExternalStoreMap

# Class: ExternalStoreMap\<K, V\>

## Type parameters

| Name |
| :------ |
| `K` |
| `V` |

## Hierarchy

- [`ExternalStore`](ExternalStore.md)\<`Map`\<`K`, `V`\>\>

  ↳ **`ExternalStoreMap`**

## Table of contents

### Constructors

- [constructor](ExternalStoreMap.md#constructor)

### Properties

- [initialValue](ExternalStoreMap.md#initialvalue)
- [listeners](ExternalStoreMap.md#listeners)
- [listenersGet](ExternalStoreMap.md#listenersget)
- [value](ExternalStoreMap.md#value)

### Methods

- [clear](ExternalStoreMap.md#clear)
- [delete](ExternalStoreMap.md#delete)
- [emitChange](ExternalStoreMap.md#emitchange)
- [emitChangeGet](ExternalStoreMap.md#emitchangeget)
- [getSnapshot](ExternalStoreMap.md#getsnapshot)
- [getSnapshotGet](ExternalStoreMap.md#getsnapshotget)
- [reset](ExternalStoreMap.md#reset)
- [set](ExternalStoreMap.md#set)
- [setValue](ExternalStoreMap.md#setvalue)
- [subscribe](ExternalStoreMap.md#subscribe)
- [subscribeGet](ExternalStoreMap.md#subscribeget)

## Constructors

### constructor

• **new ExternalStoreMap**\<`K`, `V`\>(`initialValue`): [`ExternalStoreMap`](ExternalStoreMap.md)\<`K`, `V`\>

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialValue` | `Map`\<`K`, `V`\> |

#### Returns

[`ExternalStoreMap`](ExternalStoreMap.md)\<`K`, `V`\>

#### Inherited from

[ExternalStore](ExternalStore.md).[constructor](ExternalStore.md#constructor)

#### Defined in

[stores/ExternalStore.ts:9](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStore.ts#L9)

## Properties

### initialValue

• **initialValue**: `Map`\<`K`, `V`\>

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

### listenersGet

• **listenersGet**: `Map`\<`K`, () => `void`[]\>

#### Defined in

[stores/ExternalStoreMap.ts:4](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreMap.ts#L4)

___

### value

• **value**: `Map`\<`K`, `V`\>

#### Inherited from

[ExternalStore](ExternalStore.md).[value](ExternalStore.md#value)

#### Defined in

[stores/ExternalStore.ts:5](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStore.ts#L5)

## Methods

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[stores/ExternalStoreMap.ts:13](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreMap.ts#L13)

___

### delete

▸ **delete**(`...args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [key: K] |

#### Returns

`void`

#### Defined in

[stores/ExternalStoreMap.ts:19](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreMap.ts#L19)

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

### emitChangeGet

▸ **emitChangeGet**(`key`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`void`

#### Defined in

[stores/ExternalStoreMap.ts:40](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreMap.ts#L40)

___

### getSnapshot

▸ **getSnapshot**(): `Map`\<`K`, `V`\>

#### Returns

`Map`\<`K`, `V`\>

#### Inherited from

[ExternalStore](ExternalStore.md).[getSnapshot](ExternalStore.md#getsnapshot)

#### Defined in

[stores/ExternalStore.ts:20](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStore.ts#L20)

___

### getSnapshotGet

▸ **getSnapshotGet**(`key`): () => `undefined` \| `V`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`fn`

▸ (): `undefined` \| `V`

##### Returns

`undefined` \| `V`

#### Defined in

[stores/ExternalStoreMap.ts:36](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreMap.ts#L36)

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

### set

▸ **set**(`key`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |
| `value` | `V` |

#### Returns

`void`

#### Defined in

[stores/ExternalStoreMap.ts:6](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreMap.ts#L6)

___

### setValue

▸ **setValue**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Map`\<`K`, `V`\> |

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

### subscribeGet

▸ **subscribeGet**(`key`): (`listener`: () => `void`) => () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`fn`

▸ (`listener`): () => `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | () => `void` |

##### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[stores/ExternalStoreMap.ts:25](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreMap.ts#L25)
