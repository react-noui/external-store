[@react-noui/external-store](../README.md) / [Exports](../modules.md) / ExternalStoreCollection

# Class: ExternalStoreCollection\<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`\<`string`, `unknown`\> |

## Hierarchy

- [`ExternalStoreArray`](ExternalStoreArray.md)\<`T`\>

  ↳ **`ExternalStoreCollection`**

## Table of contents

### Constructors

- [constructor](ExternalStoreCollection.md#constructor)

### Properties

- [initialValue](ExternalStoreCollection.md#initialvalue)
- [key](ExternalStoreCollection.md#key)
- [listeners](ExternalStoreCollection.md#listeners)
- [value](ExternalStoreCollection.md#value)

### Methods

- [add](ExternalStoreCollection.md#add)
- [emitChange](ExternalStoreCollection.md#emitchange)
- [find](ExternalStoreCollection.md#find)
- [getSnapshot](ExternalStoreCollection.md#getsnapshot)
- [has](ExternalStoreCollection.md#has)
- [indexOf](ExternalStoreCollection.md#indexof)
- [pop](ExternalStoreCollection.md#pop)
- [push](ExternalStoreCollection.md#push)
- [remove](ExternalStoreCollection.md#remove)
- [reset](ExternalStoreCollection.md#reset)
- [setValue](ExternalStoreCollection.md#setvalue)
- [shift](ExternalStoreCollection.md#shift)
- [splice](ExternalStoreCollection.md#splice)
- [subscribe](ExternalStoreCollection.md#subscribe)
- [unshift](ExternalStoreCollection.md#unshift)
- [update](ExternalStoreCollection.md#update)

## Constructors

### constructor

• **new ExternalStoreCollection**\<`T`\>(`defaultValue`, `uniqueIdentifier`): [`ExternalStoreCollection`](ExternalStoreCollection.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`\<`string`, `unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaultValue` | `T`[] |
| `uniqueIdentifier` | (`value`: `T`) => `string` \| `number` |

#### Returns

[`ExternalStoreCollection`](ExternalStoreCollection.md)\<`T`\>

#### Overrides

[ExternalStoreArray](ExternalStoreArray.md).[constructor](ExternalStoreArray.md#constructor)

#### Defined in

[stores/ExternalStoreCollection.ts:6](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreCollection.ts#L6)

## Properties

### initialValue

• **initialValue**: `T`[]

#### Inherited from

[ExternalStoreArray](ExternalStoreArray.md).[initialValue](ExternalStoreArray.md#initialvalue)

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

[stores/ExternalStoreCollection.ts:4](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreCollection.ts#L4)

___

### listeners

• **listeners**: () => `void`[] = `[]`

#### Inherited from

[ExternalStoreArray](ExternalStoreArray.md).[listeners](ExternalStoreArray.md#listeners)

#### Defined in

[stores/ExternalStore.ts:7](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStore.ts#L7)

___

### value

• **value**: `T`[]

#### Inherited from

[ExternalStoreArray](ExternalStoreArray.md).[value](ExternalStoreArray.md#value)

#### Defined in

[stores/ExternalStore.ts:5](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStore.ts#L5)

## Methods

### add

▸ **add**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`void`

#### Defined in

[stores/ExternalStoreCollection.ts:20](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreCollection.ts#L20)

___

### emitChange

▸ **emitChange**(): `void`

#### Returns

`void`

#### Inherited from

[ExternalStoreArray](ExternalStoreArray.md).[emitChange](ExternalStoreArray.md#emitchange)

#### Defined in

[stores/ExternalStore.ts:33](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStore.ts#L33)

___

### find

▸ **find**(`key`): `undefined` \| `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` \| `number` |

#### Returns

`undefined` \| `T`

#### Defined in

[stores/ExternalStoreCollection.ts:38](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreCollection.ts#L38)

___

### getSnapshot

▸ **getSnapshot**(): `T`[]

#### Returns

`T`[]

#### Inherited from

[ExternalStoreArray](ExternalStoreArray.md).[getSnapshot](ExternalStoreArray.md#getsnapshot)

#### Defined in

[stores/ExternalStore.ts:20](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStore.ts#L20)

___

### has

▸ **has**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` \| `number` |

#### Returns

`boolean`

#### Defined in

[stores/ExternalStoreCollection.ts:42](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreCollection.ts#L42)

___

### indexOf

▸ **indexOf**(`key`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` \| `number` |

#### Returns

`number`

#### Defined in

[stores/ExternalStoreCollection.ts:30](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreCollection.ts#L30)

___

### pop

▸ **pop**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### Inherited from

[ExternalStoreArray](ExternalStoreArray.md).[pop](ExternalStoreArray.md#pop)

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

#### Inherited from

[ExternalStoreArray](ExternalStoreArray.md).[push](ExternalStoreArray.md#push)

#### Defined in

[stores/ExternalStoreArray.ts:4](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreArray.ts#L4)

___

### remove

▸ **remove**(`key`): `T`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` \| `number` |

#### Returns

`T`[]

#### Defined in

[stores/ExternalStoreCollection.ts:26](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreCollection.ts#L26)

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

[ExternalStoreArray](ExternalStoreArray.md).[reset](ExternalStoreArray.md#reset)

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

[ExternalStoreArray](ExternalStoreArray.md).[setValue](ExternalStoreArray.md#setvalue)

#### Defined in

[stores/ExternalStore.ts:24](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStore.ts#L24)

___

### shift

▸ **shift**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### Inherited from

[ExternalStoreArray](ExternalStoreArray.md).[shift](ExternalStoreArray.md#shift)

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

#### Inherited from

[ExternalStoreArray](ExternalStoreArray.md).[splice](ExternalStoreArray.md#splice)

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

[ExternalStoreArray](ExternalStoreArray.md).[subscribe](ExternalStoreArray.md#subscribe)

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

#### Inherited from

[ExternalStoreArray](ExternalStoreArray.md).[unshift](ExternalStoreArray.md#unshift)

#### Defined in

[stores/ExternalStoreArray.ts:22](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreArray.ts#L22)

___

### update

▸ **update**(`key`, `values`): `undefined` \| `T` & `Partial`\<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `values` | `Partial`\<`T`\> |

#### Returns

`undefined` \| `T` & `Partial`\<`T`\>

#### Defined in

[stores/ExternalStoreCollection.ts:11](https://github.com/react-noui/external-store/blob/50c9d32/src/stores/ExternalStoreCollection.ts#L11)
