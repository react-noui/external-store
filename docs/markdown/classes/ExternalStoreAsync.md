[@react-noui/external-store](../README.md) / [Exports](../modules.md) / ExternalStoreAsync

# Class: ExternalStoreAsync\<P, T\>

ExternalStore<T> with a promise interface.

**`Example`**

```ts
function fetchUser(userId: number): Promise<User> {
  return fetch(...).then(res => res.json())
}
const userStore = new ExternalStoreAsync(fetchUser);
const user = await userStore.call(1);
```

## Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends (...`args`: `any`[]) => `Promise`\<`any`\> |
| `T` | `AsyncReturnType`\<`P`\> |

## Hierarchy

- [`ExternalStore`](ExternalStore.md)\<`undefined`\>

  ↳ **`ExternalStoreAsync`**

## Table of contents

### Constructors

- [constructor](ExternalStoreAsync.md#constructor)

### Properties

- [initialValue](ExternalStoreAsync.md#initialvalue)
- [key](ExternalStoreAsync.md#key)
- [listeners](ExternalStoreAsync.md#listeners)
- [listenersParams](ExternalStoreAsync.md#listenersparams)
- [promise](ExternalStoreAsync.md#promise)
- [value](ExternalStoreAsync.md#value)

### Methods

- [argsKey](ExternalStoreAsync.md#argskey)
- [call](ExternalStoreAsync.md#call)
- [emitChange](ExternalStoreAsync.md#emitchange)
- [emitChangeParams](ExternalStoreAsync.md#emitchangeparams)
- [getSnapshot](ExternalStoreAsync.md#getsnapshot)
- [getSnapshotParams](ExternalStoreAsync.md#getsnapshotparams)
- [getValue](ExternalStoreAsync.md#getvalue)
- [reset](ExternalStoreAsync.md#reset)
- [setValue](ExternalStoreAsync.md#setvalue)
- [subscribe](ExternalStoreAsync.md#subscribe)
- [subscribeParams](ExternalStoreAsync.md#subscribeparams)

## Constructors

### constructor

• **new ExternalStoreAsync**\<`P`, `T`\>(`promise`): [`ExternalStoreAsync`](ExternalStoreAsync.md)\<`P`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends (...`args`: `any`[]) => `Promise`\<`any`\> |
| `T` | `AsyncReturnType`\<`P`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `promise` | `P` |

#### Returns

[`ExternalStoreAsync`](ExternalStoreAsync.md)\<`P`, `T`\>

#### Overrides

[ExternalStore](ExternalStore.md).[constructor](ExternalStore.md#constructor)

#### Defined in

[stores/ExternalStoreAsync.ts:22](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreAsync.ts#L22)

## Properties

### initialValue

• **initialValue**: `undefined`

#### Inherited from

[ExternalStore](ExternalStore.md).[initialValue](ExternalStore.md#initialvalue)

#### Defined in

[stores/ExternalStore.ts:6](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStore.ts#L6)

___

### key

• **key**: (`value`: `T`) => `string` \| `number`

#### Type declaration

▸ (`value`): `string` \| `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

##### Returns

`string` \| `number`

#### Defined in

[stores/ExternalStoreAsync.ts:18](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreAsync.ts#L18)

___

### listeners

• **listeners**: () => `void`[] = `[]`

#### Inherited from

[ExternalStore](ExternalStore.md).[listeners](ExternalStore.md#listeners)

#### Defined in

[stores/ExternalStore.ts:7](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStore.ts#L7)

___

### listenersParams

• `Private` **listenersParams**: `Record`\<`string`, () => `void`[]\> = `{}`

#### Defined in

[stores/ExternalStoreAsync.ts:20](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreAsync.ts#L20)

___

### promise

• **promise**: `Memoize`\<`P`\>

#### Defined in

[stores/ExternalStoreAsync.ts:19](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreAsync.ts#L19)

___

### value

• **value**: `undefined`

#### Inherited from

[ExternalStore](ExternalStore.md).[value](ExternalStore.md#value)

#### Defined in

[stores/ExternalStore.ts:5](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStore.ts#L5)

## Methods

### argsKey

▸ **argsKey**(`...args`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `Parameters`\<`P`\> |

#### Returns

`string`

#### Defined in

[stores/ExternalStoreAsync.ts:27](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreAsync.ts#L27)

___

### call

▸ **call**(`...args`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `Parameters`\<`P`\> |

#### Returns

`Promise`\<`void`\>

#### Defined in

[stores/ExternalStoreAsync.ts:33](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreAsync.ts#L33)

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

### emitChangeParams

▸ **emitChangeParams**(`key`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`void`

#### Defined in

[stores/ExternalStoreAsync.ts:50](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreAsync.ts#L50)

___

### getSnapshot

▸ **getSnapshot**(): `undefined`

#### Returns

`undefined`

#### Inherited from

[ExternalStore](ExternalStore.md).[getSnapshot](ExternalStore.md#getsnapshot)

#### Defined in

[stores/ExternalStore.ts:20](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStore.ts#L20)

___

### getSnapshotParams

▸ **getSnapshotParams**(`...args`): `undefined` \| `AsyncReturnType`\<`P`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `Parameters`\<`P`\> |

#### Returns

`undefined` \| `AsyncReturnType`\<`P`\>

#### Defined in

[stores/ExternalStoreAsync.ts:48](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreAsync.ts#L48)

___

### getValue

▸ **getValue**(`...args`): `undefined` \| `AsyncReturnType`\<`P`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `Parameters`\<`P`\> |

#### Returns

`undefined` \| `AsyncReturnType`\<`P`\>

#### Defined in

[stores/ExternalStoreAsync.ts:29](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreAsync.ts#L29)

___

### reset

▸ **reset**(`...args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `Parameters`\<`P`\> |

#### Returns

`void`

#### Overrides

[ExternalStore](ExternalStore.md).[reset](ExternalStore.md#reset)

#### Defined in

[stores/ExternalStoreAsync.ts:54](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreAsync.ts#L54)

___

### setValue

▸ **setValue**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` |

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

### subscribeParams

▸ **subscribeParams**(`...args`): (`listener`: () => `void`) => () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `Parameters`\<`P`\> |

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

[stores/ExternalStoreAsync.ts:38](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreAsync.ts#L38)
