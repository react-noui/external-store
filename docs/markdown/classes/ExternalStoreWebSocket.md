[@react-noui/external-store](../README.md) / [Exports](../modules.md) / ExternalStoreWebSocket

# Class: ExternalStoreWebSocket

## Hierarchy

- [`ExternalStore`](ExternalStore.md)\<`string` \| `BinaryData`\>

  ↳ **`ExternalStoreWebSocket`**

## Table of contents

### Constructors

- [constructor](ExternalStoreWebSocket.md#constructor)

### Properties

- [initialValue](ExternalStoreWebSocket.md#initialvalue)
- [listeners](ExternalStoreWebSocket.md#listeners)
- [socket](ExternalStoreWebSocket.md#socket)
- [url](ExternalStoreWebSocket.md#url)
- [value](ExternalStoreWebSocket.md#value)

### Methods

- [emitChange](ExternalStoreWebSocket.md#emitchange)
- [getSnapshot](ExternalStoreWebSocket.md#getsnapshot)
- [handleMessage](ExternalStoreWebSocket.md#handlemessage)
- [openSocket](ExternalStoreWebSocket.md#opensocket)
- [reset](ExternalStoreWebSocket.md#reset)
- [send](ExternalStoreWebSocket.md#send)
- [setValue](ExternalStoreWebSocket.md#setvalue)
- [subscribe](ExternalStoreWebSocket.md#subscribe)

## Constructors

### constructor

• **new ExternalStoreWebSocket**(`url`, `defaultValue`): [`ExternalStoreWebSocket`](ExternalStoreWebSocket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `defaultValue` | `string` \| `BinaryData` |

#### Returns

[`ExternalStoreWebSocket`](ExternalStoreWebSocket.md)

#### Overrides

[ExternalStore](ExternalStore.md).[constructor](ExternalStore.md#constructor)

#### Defined in

[stores/ExternalStoreWebSocket.ts:8](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreWebSocket.ts#L8)

## Properties

### initialValue

• **initialValue**: `string` \| `BinaryData`

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

### socket

• `Optional` **socket**: `WebSocket`

#### Defined in

[stores/ExternalStoreWebSocket.ts:5](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreWebSocket.ts#L5)

___

### url

• **url**: `string`

#### Defined in

[stores/ExternalStoreWebSocket.ts:6](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreWebSocket.ts#L6)

___

### value

• **value**: `string` \| `BinaryData`

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

▸ **getSnapshot**(): `string` \| `BinaryData`

#### Returns

`string` \| `BinaryData`

#### Inherited from

[ExternalStore](ExternalStore.md).[getSnapshot](ExternalStore.md#getsnapshot)

#### Defined in

[stores/ExternalStore.ts:20](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStore.ts#L20)

___

### handleMessage

▸ **handleMessage**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MessageEvent`\<`any`\> |

#### Returns

`void`

#### Defined in

[stores/ExternalStoreWebSocket.ts:15](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreWebSocket.ts#L15)

___

### openSocket

▸ **openSocket**(): `Promise`\<`WebSocket`\>

#### Returns

`Promise`\<`WebSocket`\>

#### Defined in

[stores/ExternalStoreWebSocket.ts:20](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreWebSocket.ts#L20)

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

### send

▸ **send**(`...args`): `Promise`\<`undefined` \| `void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [data: string \| ArrayBufferView \| ArrayBufferLike \| Blob] |

#### Returns

`Promise`\<`undefined` \| `void`\>

#### Defined in

[stores/ExternalStoreWebSocket.ts:34](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreWebSocket.ts#L34)

___

### setValue

▸ **setValue**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| `BinaryData` |

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

#### Overrides

[ExternalStore](ExternalStore.md).[subscribe](ExternalStore.md#subscribe)

#### Defined in

[stores/ExternalStoreWebSocket.ts:40](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreWebSocket.ts#L40)
