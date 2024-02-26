[@react-noui/external-store](../README.md) / [Exports](../modules.md) / ExternalStoreNumber

# Class: ExternalStoreNumber

## Hierarchy

- [`ExternalStore`](ExternalStore.md)\<`number`\>

  ↳ **`ExternalStoreNumber`**

## Table of contents

### Constructors

- [constructor](ExternalStoreNumber.md#constructor)

### Properties

- [initialValue](ExternalStoreNumber.md#initialvalue)
- [listeners](ExternalStoreNumber.md#listeners)
- [value](ExternalStoreNumber.md#value)

### Methods

- [decrement](ExternalStoreNumber.md#decrement)
- [emitChange](ExternalStoreNumber.md#emitchange)
- [getSnapshot](ExternalStoreNumber.md#getsnapshot)
- [increment](ExternalStoreNumber.md#increment)
- [reset](ExternalStoreNumber.md#reset)
- [setValue](ExternalStoreNumber.md#setvalue)
- [subscribe](ExternalStoreNumber.md#subscribe)

## Constructors

### constructor

• **new ExternalStoreNumber**(`initialValue`): [`ExternalStoreNumber`](ExternalStoreNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialValue` | `number` |

#### Returns

[`ExternalStoreNumber`](ExternalStoreNumber.md)

#### Inherited from

[ExternalStore](ExternalStore.md).[constructor](ExternalStore.md#constructor)

#### Defined in

[stores/ExternalStore.ts:9](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStore.ts#L9)

## Properties

### initialValue

• **initialValue**: `number`

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

• **value**: `number`

#### Inherited from

[ExternalStore](ExternalStore.md).[value](ExternalStore.md#value)

#### Defined in

[stores/ExternalStore.ts:5](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStore.ts#L5)

## Methods

### decrement

▸ **decrement**(`value?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `number` | `1` |

#### Returns

`void`

#### Defined in

[stores/ExternalStoreNumber.ts:8](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreNumber.ts#L8)

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

▸ **getSnapshot**(): `number`

#### Returns

`number`

#### Inherited from

[ExternalStore](ExternalStore.md).[getSnapshot](ExternalStore.md#getsnapshot)

#### Defined in

[stores/ExternalStore.ts:20](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStore.ts#L20)

___

### increment

▸ **increment**(`value?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `number` | `1` |

#### Returns

`void`

#### Defined in

[stores/ExternalStoreNumber.ts:4](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreNumber.ts#L4)

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
| `value` | `number` |

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
