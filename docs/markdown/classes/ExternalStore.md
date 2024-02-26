[@react-noui/external-store](../README.md) / [Exports](../modules.md) / ExternalStore

# Class: ExternalStore\<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- **`ExternalStore`**

  ↳ [`ExternalStoreArray`](ExternalStoreArray.md)

  ↳ [`ExternalStoreAsync`](ExternalStoreAsync.md)

  ↳ [`ExternalStoreBoolean`](ExternalStoreBoolean.md)

  ↳ [`ExternalStoreCustomEvent`](ExternalStoreCustomEvent.md)

  ↳ [`ExternalStoreMap`](ExternalStoreMap.md)

  ↳ [`ExternalStoreNumber`](ExternalStoreNumber.md)

  ↳ [`ExternalStoreRecord`](ExternalStoreRecord.md)

  ↳ [`ExternalStoreRegExp`](ExternalStoreRegExp.md)

  ↳ [`ExternalStoreSet`](ExternalStoreSet.md)

  ↳ [`ExternalStoreStorage`](ExternalStoreStorage.md)

  ↳ [`ExternalStoreString`](ExternalStoreString.md)

  ↳ [`ExternalStoreWebSocket`](ExternalStoreWebSocket.md)

## Table of contents

### Constructors

- [constructor](ExternalStore.md#constructor)

### Properties

- [initialValue](ExternalStore.md#initialvalue)
- [listeners](ExternalStore.md#listeners)
- [value](ExternalStore.md#value)

### Methods

- [emitChange](ExternalStore.md#emitchange)
- [getSnapshot](ExternalStore.md#getsnapshot)
- [reset](ExternalStore.md#reset)
- [setValue](ExternalStore.md#setvalue)
- [subscribe](ExternalStore.md#subscribe)

## Constructors

### constructor

• **new ExternalStore**\<`T`\>(`initialValue`): [`ExternalStore`](ExternalStore.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialValue` | `T` |

#### Returns

[`ExternalStore`](ExternalStore.md)\<`T`\>

#### Defined in

[stores/ExternalStore.ts:9](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStore.ts#L9)

## Properties

### initialValue

• **initialValue**: `T`

#### Defined in

[stores/ExternalStore.ts:6](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStore.ts#L6)

___

### listeners

• **listeners**: () => `void`[] = `[]`

#### Defined in

[stores/ExternalStore.ts:7](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStore.ts#L7)

___

### value

• **value**: `T`

#### Defined in

[stores/ExternalStore.ts:5](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStore.ts#L5)

## Methods

### emitChange

▸ **emitChange**(): `void`

#### Returns

`void`

#### Defined in

[stores/ExternalStore.ts:33](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStore.ts#L33)

___

### getSnapshot

▸ **getSnapshot**(): `T`

#### Returns

`T`

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

#### Defined in

[stores/ExternalStore.ts:13](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStore.ts#L13)
