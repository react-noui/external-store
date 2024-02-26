[@react-noui/external-store](../README.md) / [Exports](../modules.md) / ExternalStoreStorage

# Class: ExternalStoreStorage\<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`ExternalStore`](ExternalStore.md)\<`T` \| `undefined`\>

  ↳ **`ExternalStoreStorage`**

## Table of contents

### Constructors

- [constructor](ExternalStoreStorage.md#constructor)

### Properties

- [getStorage](ExternalStoreStorage.md#getstorage)
- [initialValue](ExternalStoreStorage.md#initialvalue)
- [key](ExternalStoreStorage.md#key)
- [listeners](ExternalStoreStorage.md#listeners)
- [serialize](ExternalStoreStorage.md#serialize)
- [setStorage](ExternalStoreStorage.md#setstorage)
- [storage](ExternalStoreStorage.md#storage)
- [value](ExternalStoreStorage.md#value)

### Methods

- [clear](ExternalStoreStorage.md#clear)
- [emitChange](ExternalStoreStorage.md#emitchange)
- [getSnapshot](ExternalStoreStorage.md#getsnapshot)
- [handleStorage](ExternalStoreStorage.md#handlestorage)
- [reset](ExternalStoreStorage.md#reset)
- [setValue](ExternalStoreStorage.md#setvalue)
- [subscribe](ExternalStoreStorage.md#subscribe)

## Constructors

### constructor

• **new ExternalStoreStorage**\<`T`\>(`storage`, `key`, `initialValue`, `serialize?`): [`ExternalStoreStorage`](ExternalStoreStorage.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `storage` | `Storage` |
| `key` | `string` \| `Symbol` |
| `initialValue` | `T` |
| `serialize` | `SerializeUpDown`\<`T`\> |

#### Returns

[`ExternalStoreStorage`](ExternalStoreStorage.md)\<`T`\>

#### Overrides

[ExternalStore](ExternalStore.md).[constructor](ExternalStore.md#constructor)

#### Defined in

[stores/ExternalStoreStorage.ts:53](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreStorage.ts#L53)

## Properties

### getStorage

• `Readonly` **getStorage**: (`storage`: `Storage`, `key`: `string` \| `Symbol`) => `T`

#### Type declaration

▸ (`storage`, `key`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `storage` | `Storage` |
| `key` | `string` \| `Symbol` |

##### Returns

`T`

#### Defined in

[stores/ExternalStoreStorage.ts:51](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreStorage.ts#L51)

___

### initialValue

• **initialValue**: `undefined` \| `T`

#### Inherited from

[ExternalStore](ExternalStore.md).[initialValue](ExternalStore.md#initialvalue)

#### Defined in

[stores/ExternalStore.ts:6](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStore.ts#L6)

___

### key

• `Readonly` **key**: `string` \| `Symbol`

#### Defined in

[stores/ExternalStoreStorage.ts:47](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreStorage.ts#L47)

___

### listeners

• **listeners**: () => `void`[] = `[]`

#### Inherited from

[ExternalStore](ExternalStore.md).[listeners](ExternalStore.md#listeners)

#### Defined in

[stores/ExternalStore.ts:7](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStore.ts#L7)

___

### serialize

• `Readonly` **serialize**: `SerializeUpDown`\<`T`\>

#### Defined in

[stores/ExternalStoreStorage.ts:49](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreStorage.ts#L49)

___

### setStorage

• `Readonly` **setStorage**: (`storage`: `Storage`, `key`: `string` \| `Symbol`, `value`: `T`) => `void`

#### Type declaration

▸ (`storage`, `key`, `value`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `storage` | `Storage` |
| `key` | `string` \| `Symbol` |
| `value` | `T` |

##### Returns

`void`

#### Defined in

[stores/ExternalStoreStorage.ts:50](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreStorage.ts#L50)

___

### storage

• `Readonly` **storage**: `Storage`

#### Defined in

[stores/ExternalStoreStorage.ts:48](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreStorage.ts#L48)

___

### value

• **value**: `undefined` \| `T`

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

[stores/ExternalStoreStorage.ts:78](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreStorage.ts#L78)

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

▸ **getSnapshot**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### Inherited from

[ExternalStore](ExternalStore.md).[getSnapshot](ExternalStore.md#getsnapshot)

#### Defined in

[stores/ExternalStore.ts:20](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStore.ts#L20)

___

### handleStorage

▸ **handleStorage**(`event`): `void`

Event handler for `storage` events.

https://developer.mozilla.org/en-US/docs/Web/API/Window/storage_event

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `StorageEvent` | StorageEvent |

#### Returns

`void`

#### Defined in

[stores/ExternalStoreStorage.ts:103](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreStorage.ts#L103)

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
| `value` | `T` |

#### Returns

`void`

#### Overrides

[ExternalStore](ExternalStore.md).[setValue](ExternalStore.md#setvalue)

#### Defined in

[stores/ExternalStoreStorage.ts:73](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreStorage.ts#L73)

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

#### Overrides

[ExternalStore](ExternalStore.md).[subscribe](ExternalStore.md#subscribe)

#### Defined in

[stores/ExternalStoreStorage.ts:84](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreStorage.ts#L84)
