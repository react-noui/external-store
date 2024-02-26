[@react-noui/external-store](../README.md) / [Exports](../modules.md) / ExternalStoreCustomEvent

# Class: ExternalStoreCustomEvent\<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`ExternalStore`](ExternalStore.md)\<`T`\>

  ↳ **`ExternalStoreCustomEvent`**

## Table of contents

### Constructors

- [constructor](ExternalStoreCustomEvent.md#constructor)

### Properties

- [autoListen](ExternalStoreCustomEvent.md#autolisten)
- [eventType](ExternalStoreCustomEvent.md#eventtype)
- [initialValue](ExternalStoreCustomEvent.md#initialvalue)
- [listeners](ExternalStoreCustomEvent.md#listeners)
- [value](ExternalStoreCustomEvent.md#value)

### Methods

- [emitChange](ExternalStoreCustomEvent.md#emitchange)
- [getSnapshot](ExternalStoreCustomEvent.md#getsnapshot)
- [handleEvent](ExternalStoreCustomEvent.md#handleevent)
- [reset](ExternalStoreCustomEvent.md#reset)
- [setValue](ExternalStoreCustomEvent.md#setvalue)
- [subscribe](ExternalStoreCustomEvent.md#subscribe)

## Constructors

### constructor

• **new ExternalStoreCustomEvent**\<`T`\>(`eventType`, `defaultValue`, `options?`): [`ExternalStoreCustomEvent`](ExternalStoreCustomEvent.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventType` | `string` |
| `defaultValue` | `T` |
| `options?` | `Object` |
| `options.autoListen?` | `boolean` |

#### Returns

[`ExternalStoreCustomEvent`](ExternalStoreCustomEvent.md)\<`T`\>

#### Overrides

[ExternalStore](ExternalStore.md).[constructor](ExternalStore.md#constructor)

#### Defined in

[stores/ExternalStoreCustomEvent.ts:7](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreCustomEvent.ts#L7)

## Properties

### autoListen

• **autoListen**: `boolean`

#### Defined in

[stores/ExternalStoreCustomEvent.ts:5](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreCustomEvent.ts#L5)

___

### eventType

• **eventType**: `string`

#### Defined in

[stores/ExternalStoreCustomEvent.ts:4](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreCustomEvent.ts#L4)

___

### initialValue

• **initialValue**: `T`

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

• **value**: `T`

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

▸ **getSnapshot**(): `T`

#### Returns

`T`

#### Inherited from

[ExternalStore](ExternalStore.md).[getSnapshot](ExternalStore.md#getsnapshot)

#### Defined in

[stores/ExternalStore.ts:20](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStore.ts#L20)

___

### handleEvent

▸ **handleEvent**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Event` |

#### Returns

`void`

#### Defined in

[stores/ExternalStoreCustomEvent.ts:34](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreCustomEvent.ts#L34)

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

[stores/ExternalStoreCustomEvent.ts:21](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreCustomEvent.ts#L21)
