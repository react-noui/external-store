[@react-noui/external-store](README.md) / Exports

# @react-noui/external-store

## Table of contents

### Classes

- [ExternalStore](classes/ExternalStore.md)
- [ExternalStoreArray](classes/ExternalStoreArray.md)
- [ExternalStoreAsync](classes/ExternalStoreAsync.md)
- [ExternalStoreBoolean](classes/ExternalStoreBoolean.md)
- [ExternalStoreCollection](classes/ExternalStoreCollection.md)
- [ExternalStoreCustomEvent](classes/ExternalStoreCustomEvent.md)
- [ExternalStoreMap](classes/ExternalStoreMap.md)
- [ExternalStoreNumber](classes/ExternalStoreNumber.md)
- [ExternalStoreRecord](classes/ExternalStoreRecord.md)
- [ExternalStoreRegExp](classes/ExternalStoreRegExp.md)
- [ExternalStoreSet](classes/ExternalStoreSet.md)
- [ExternalStoreStorage](classes/ExternalStoreStorage.md)
- [ExternalStoreString](classes/ExternalStoreString.md)
- [ExternalStoreWebSocket](classes/ExternalStoreWebSocket.md)

### Functions

- [makeExternalStore](modules.md#makeexternalstore)
- [makeExternalStoreArray](modules.md#makeexternalstorearray)
- [makeExternalStoreAsync](modules.md#makeexternalstoreasync)
- [makeExternalStoreBoolean](modules.md#makeexternalstoreboolean)
- [makeExternalStoreCollection](modules.md#makeexternalstorecollection)
- [makeExternalStoreCustomEvent](modules.md#makeexternalstorecustomevent)
- [makeExternalStoreMap](modules.md#makeexternalstoremap)
- [makeExternalStoreNumber](modules.md#makeexternalstorenumber)
- [makeExternalStoreRecord](modules.md#makeexternalstorerecord)
- [makeExternalStoreRegExp](modules.md#makeexternalstoreregexp)
- [makeExternalStoreSet](modules.md#makeexternalstoreset)
- [makeExternalStoreStorage](modules.md#makeexternalstorestorage)
- [makeExternalStoreString](modules.md#makeexternalstorestring)
- [makeExternalStoreWebSocket](modules.md#makeexternalstorewebsocket)
- [syncExternalStore](modules.md#syncexternalstore)

## Functions

### makeExternalStore

▸ **makeExternalStore**(`arg`): `ReturnType`\<typeof [`makeExternalStoreBoolean`](modules.md#makeexternalstoreboolean)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `boolean` |

#### Returns

`ReturnType`\<typeof [`makeExternalStoreBoolean`](modules.md#makeexternalstoreboolean)\>

#### Defined in

[factories/makeExternalStore.ts:14](https://github.com/react-noui/external-store/blob/50c9d32/src/factories/makeExternalStore.ts#L14)

▸ **makeExternalStore**(`arg`): `ReturnType`\<typeof [`makeExternalStoreNumber`](modules.md#makeexternalstorenumber)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `number` |

#### Returns

`ReturnType`\<typeof [`makeExternalStoreNumber`](modules.md#makeexternalstorenumber)\>

#### Defined in

[factories/makeExternalStore.ts:15](https://github.com/react-noui/external-store/blob/50c9d32/src/factories/makeExternalStore.ts#L15)

▸ **makeExternalStore**(`arg`): `ReturnType`\<typeof [`makeExternalStoreString`](modules.md#makeexternalstorestring)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `string` |

#### Returns

`ReturnType`\<typeof [`makeExternalStoreString`](modules.md#makeexternalstorestring)\>

#### Defined in

[factories/makeExternalStore.ts:16](https://github.com/react-noui/external-store/blob/50c9d32/src/factories/makeExternalStore.ts#L16)

▸ **makeExternalStore**\<`T`\>(`arg`): `ReturnType`\<typeof [`makeExternalStoreRecord`](modules.md#makeexternalstorerecord)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`\<`string`, `unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `T` |

#### Returns

`ReturnType`\<typeof [`makeExternalStoreRecord`](modules.md#makeexternalstorerecord)\>

#### Defined in

[factories/makeExternalStore.ts:17](https://github.com/react-noui/external-store/blob/50c9d32/src/factories/makeExternalStore.ts#L17)

▸ **makeExternalStore**\<`T`\>(`arg`): `ReturnType`\<typeof [`makeExternalStoreArray`](modules.md#makeexternalstorearray)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `T`[] |

#### Returns

`ReturnType`\<typeof [`makeExternalStoreArray`](modules.md#makeexternalstorearray)\>

#### Defined in

[factories/makeExternalStore.ts:18](https://github.com/react-noui/external-store/blob/50c9d32/src/factories/makeExternalStore.ts#L18)

▸ **makeExternalStore**\<`K`, `V`\>(`arg`): `ReturnType`\<typeof [`makeExternalStoreMap`](modules.md#makeexternalstoremap)\>

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `Map`\<`K`, `V`\> |

#### Returns

`ReturnType`\<typeof [`makeExternalStoreMap`](modules.md#makeexternalstoremap)\>

#### Defined in

[factories/makeExternalStore.ts:19](https://github.com/react-noui/external-store/blob/50c9d32/src/factories/makeExternalStore.ts#L19)

▸ **makeExternalStore**\<`T`\>(`arg`): `ReturnType`\<typeof [`makeExternalStoreSet`](modules.md#makeexternalstoreset)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `Set`\<`T`\> |

#### Returns

`ReturnType`\<typeof [`makeExternalStoreSet`](modules.md#makeexternalstoreset)\>

#### Defined in

[factories/makeExternalStore.ts:20](https://github.com/react-noui/external-store/blob/50c9d32/src/factories/makeExternalStore.ts#L20)

▸ **makeExternalStore**(`arg`): `ReturnType`\<typeof [`makeExternalStoreRegExp`](modules.md#makeexternalstoreregexp)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `RegExp` |

#### Returns

`ReturnType`\<typeof [`makeExternalStoreRegExp`](modules.md#makeexternalstoreregexp)\>

#### Defined in

[factories/makeExternalStore.ts:21](https://github.com/react-noui/external-store/blob/50c9d32/src/factories/makeExternalStore.ts#L21)

▸ **makeExternalStore**\<`T`\>(`args`): `ReturnType`\<typeof `makeExternalStoreBasic`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `T` |

#### Returns

`ReturnType`\<typeof `makeExternalStoreBasic`\>

#### Defined in

[factories/makeExternalStore.ts:22](https://github.com/react-noui/external-store/blob/50c9d32/src/factories/makeExternalStore.ts#L22)

___

### makeExternalStoreArray

▸ **makeExternalStoreArray**\<`T`\>(`arg`): `Object`

External store for use with a boolean value.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg` | `T`[] | T[] |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `getValue` | () => `T`[] |
| `pop` | () => `undefined` \| `T` |
| `push` | (...`args`: `T`[]) => `number` |
| `setValue` | (...`args`: [value: T[]]) => `void` |
| `shift` | () => `undefined` \| `T` |
| `store` | [`ExternalStoreArray`](classes/ExternalStoreArray.md)\<`T`\> |
| `unshift` | (...`args`: `T`[]) => `number` |
| `useUpdates` | (`callback`: (`value`: `T`[]) => `void`) => `void` |
| `useValue` | () => `T`[] |

**`Example`**

```typescript
const MyStrings = makeExternalStore<string>([]);
```

```tsx
const ItemsDisplay = () => (
  <div>{MyStrings.useValue().map((value) => (
    <div key={value}>{value}</div>
  ))}</div>
);

const handleAddItem = <T>(item: T) =>
  MyStrings.push(event.target.checked);

const AddItemButton = <T>({ item }: { item: T }) => (
  <input checked={MyStrings.useValue()} onChange={handleAddItem} />
);
```

#### Defined in

[factories/makeExternalStoreArray.ts:27](https://github.com/react-noui/external-store/blob/50c9d32/src/factories/makeExternalStoreArray.ts#L27)

___

### makeExternalStoreAsync

▸ **makeExternalStoreAsync**\<`P`\>(`promise`): `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends (...`args`: `any`[]) => `Promise`\<`any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `promise` | `P` | Any promise that returns a value. |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `reset` | (...`args`: `Parameters`\<`P`\>) => `void` |
| `store` | [`ExternalStoreAsync`](classes/ExternalStoreAsync.md)\<`P`, `AsyncReturnType`\<`P`\>\> |
| `useValue` | (...`args`: `Parameters`\<`P`\>) => `AsyncReturnType`\<`P`\> |

#### Defined in

[factories/makeExternalStoreAsync.ts:10](https://github.com/react-noui/external-store/blob/50c9d32/src/factories/makeExternalStoreAsync.ts#L10)

___

### makeExternalStoreBoolean

▸ **makeExternalStoreBoolean**(`arg?`): `Object`

External store for use with a boolean value.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `arg` | `boolean` | `false` | Boolean |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `getValue` | () => `boolean` |
| `setFalse` | () => `void` |
| `setTrue` | () => `void` |
| `setValue` | (...`args`: [value: boolean]) => `void` |
| `store` | [`ExternalStoreBoolean`](classes/ExternalStoreBoolean.md) |
| `toggle` | () => `void` |
| `useUpdates` | (`callback`: (`value`: `boolean`) => `void`) => `void` |
| `useValue` | () => `boolean` |

**`Example`**

```ts
const MySetting = makeExternalStore(false);

const handleChange = (event) =>
  MySetting.setValue(event.target.checked);

const SettingCheckbox = () => (
  <input checked={MySetting.useValue()} onChange={handleChange}
);
```

#### Defined in

[factories/makeExternalStoreBoolean.ts:17](https://github.com/react-noui/external-store/blob/50c9d32/src/factories/makeExternalStoreBoolean.ts#L17)

___

### makeExternalStoreCollection

▸ **makeExternalStoreCollection**\<`T`\>(`defaultValue`, `uniqueIdentifier`): `Object`

A collection is an Array of Records. Each record should contain a unique identifier,
defined by the `uniqueIdentifier` argument.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`\<`string`, `unknown`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `defaultValue` | `T`[] | Array of items to default the collection. |
| `uniqueIdentifier` | (`value`: `T`) => `string` \| `number` | Function that accepts one argument, a single item of the collection, and returns a unique value for that item. |

#### Returns

`Object`

React-aware in-memory collection interface.

| Name | Type |
| :------ | :------ |
| `add` | (`value`: `T`) => `void` |
| `getValue` | () => `T`[] |
| `remove` | (`key`: `string` \| `number`) => `T`[] |
| `setValue` | (...`args`: [value: T[]]) => `void` |
| `store` | [`ExternalStoreCollection`](classes/ExternalStoreCollection.md)\<`T`\> |
| `update` | (`key`: `string`, `values`: `Partial`\<`T`\>) => `undefined` \| `T` & `Partial`\<`T`\> |
| `useUpdates` | (`callback`: (`value`: `T`[]) => `void`) => `void` |
| `useValue` | () => `T`[] |

**`Example`**

```ts
type Todo = { text: string; done: boolean; id: string };
const Todos = makeExternalStoreCollection<Todo>([], (todo) => todo.id);
Todos.add({ text: "Add todo", done: false, id: "abc123" });
Todos.update("abc123", { done: true });
```

#### Defined in

[factories/makeExternalStoreCollection.ts:16](https://github.com/react-noui/external-store/blob/50c9d32/src/factories/makeExternalStoreCollection.ts#L16)

___

### makeExternalStoreCustomEvent

▸ **makeExternalStoreCustomEvent**\<`T`\>(`...args`): `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [eventType: string, defaultValue: T, options?: Object] |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `getValue` | () => `T` |
| `setValue` | (...`args`: [value: T]) => `void` |
| `store` | [`ExternalStoreCustomEvent`](classes/ExternalStoreCustomEvent.md)\<`T`\> |
| `useUpdates` | (`callback`: (`value`: `T`) => `void`) => `void` |
| `useValue` | () => `T` |

#### Defined in

[factories/makeExternalStoreCustomEvent.ts:4](https://github.com/react-noui/external-store/blob/50c9d32/src/factories/makeExternalStoreCustomEvent.ts#L4)

___

### makeExternalStoreMap

▸ **makeExternalStoreMap**\<`K`, `V`\>(`arg`): `Object`

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `Map`\<`K`, `V`\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `clear` | () => `void` |
| `delete` | (...`args`: [key: K]) => `void` |
| `getValue` | () => `Map`\<`K`, `V`\> |
| `set` | (`key`: `K`, `value`: `V`) => `void` |
| `setValue` | (...`args`: [value: Map\<K, V\>]) => `void` |
| `store` | [`ExternalStoreMap`](classes/ExternalStoreMap.md)\<`K`, `V`\> |
| `useGet` | (`key`: `K`) => `undefined` \| `V` |
| `useUpdates` | (`callback`: (`value`: `Map`\<`K`, `V`\>) => `void`) => `void` |
| `useValue` | () => `Map`\<`K`, `V`\> |

#### Defined in

[factories/makeExternalStoreMap.ts:5](https://github.com/react-noui/external-store/blob/50c9d32/src/factories/makeExternalStoreMap.ts#L5)

___

### makeExternalStoreNumber

▸ **makeExternalStoreNumber**(`arg?`): `Object`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `arg` | `number` | `0` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `decrement` | (`value`: `number`) => `void` |
| `getValue` | () => `number` |
| `increment` | (`value`: `number`) => `void` |
| `setValue` | (...`args`: [value: number]) => `void` |
| `store` | [`ExternalStoreNumber`](classes/ExternalStoreNumber.md) |
| `useUpdates` | (`callback`: (`value`: `number`) => `void`) => `void` |
| `useValue` | () => `number` |

#### Defined in

[factories/makeExternalStoreNumber.ts:4](https://github.com/react-noui/external-store/blob/50c9d32/src/factories/makeExternalStoreNumber.ts#L4)

___

### makeExternalStoreRecord

▸ **makeExternalStoreRecord**\<`T`\>(`arg`): `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`\<`string`, `unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `T` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `getValue` | () => `T` |
| `reset` | (...`args`: `any`[]) => `void` |
| `setEntry` | (`key`: keyof `T`, `value`: `T`[keyof `T`]) => `void` |
| `setValue` | (...`args`: [value: T]) => `void` |
| `spread` | (`value`: `Partial`\<`T`\>) => `void` |
| `store` | [`ExternalStoreRecord`](classes/ExternalStoreRecord.md)\<`T`\> |
| `useEntry` | (`key`: keyof `T`) => `T`[keyof `T`] |
| `useUpdates` | (`callback`: (`value`: `T`) => `void`) => `void` |
| `useValue` | () => `T` |

#### Defined in

[factories/makeExternalStoreRecord.ts:5](https://github.com/react-noui/external-store/blob/50c9d32/src/factories/makeExternalStoreRecord.ts#L5)

___

### makeExternalStoreRegExp

▸ **makeExternalStoreRegExp**(`...args`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [pattern: string \| RegExp, flags?: string] |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `getValue` | () => `RegExp` |
| `setValue` | (...`args`: [pattern: string \| RegExp, flags?: string]) => `void` |
| `store` | [`ExternalStoreRegExp`](classes/ExternalStoreRegExp.md) |
| `useUpdates` | (`callback`: (`value`: `RegExp`) => `void`) => `void` |
| `useValue` | () => `RegExp` |

#### Defined in

[factories/makeExternalStoreRegExp.ts:4](https://github.com/react-noui/external-store/blob/50c9d32/src/factories/makeExternalStoreRegExp.ts#L4)

___

### makeExternalStoreSet

▸ **makeExternalStoreSet**\<`T`\>(`arg?`): `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `Set`\<`T`\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `add` | (...`args`: `T`[]) => `void` |
| `clear` | () => `void` |
| `delete` | (...`args`: [value: T]) => `void` |
| `getValue` | () => `Set`\<`T`\> |
| `setValue` | (...`args`: [value: Set\<T\>]) => `void` |
| `store` | [`ExternalStoreSet`](classes/ExternalStoreSet.md)\<`T`\> |
| `useUpdates` | (`callback`: (`value`: `Set`\<`T`\>) => `void`) => `void` |
| `useValue` | () => `Set`\<`T`\> |

#### Defined in

[factories/makeExternalStoreSet.ts:4](https://github.com/react-noui/external-store/blob/50c9d32/src/factories/makeExternalStoreSet.ts#L4)

___

### makeExternalStoreStorage

▸ **makeExternalStoreStorage**\<`T`\>(`arg`, `key`, `defaultValue`, `serialize?`): `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `Storage` |
| `key` | `string` \| `Symbol` |
| `defaultValue` | `T` |
| `serialize?` | `SerializeUpDown`\<`T`\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `clear` | () => `void` |
| `getValue` | () => `undefined` \| `T` |
| `setValue` | (...`args`: [value: T]) => `void` |
| `store` | [`ExternalStoreStorage`](classes/ExternalStoreStorage.md)\<`T`\> |
| `useUpdates` | (`callback`: (`value`: `undefined` \| `T`) => `void`) => `void` |
| `useValue` | () => `undefined` \| `T` |

#### Defined in

[factories/makeExternalStoreStorage.ts:5](https://github.com/react-noui/external-store/blob/50c9d32/src/factories/makeExternalStoreStorage.ts#L5)

___

### makeExternalStoreString

▸ **makeExternalStoreString**(`arg?`): `Object`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `arg` | `string` | `""` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `getValue` | () => `string` |
| `setValue` | (...`args`: [value: string]) => `void` |
| `store` | [`ExternalStoreString`](classes/ExternalStoreString.md) |
| `useUpdates` | (`callback`: (`value`: `string`) => `void`) => `void` |
| `useValue` | () => `string` |

#### Defined in

[factories/makeExternalStoreString.ts:4](https://github.com/react-noui/external-store/blob/50c9d32/src/factories/makeExternalStoreString.ts#L4)

___

### makeExternalStoreWebSocket

▸ **makeExternalStoreWebSocket**(`url`, `defaultValue?`): `Object`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `url` | `string` | `undefined` |
| `defaultValue` | `string` | `""` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `getValue` | () => `string` \| `BinaryData` |
| `send` | (...`args`: [data: string \| ArrayBufferView \| ArrayBufferLike \| Blob]) => `Promise`\<`undefined` \| `void`\> |
| `setValue` | (...`args`: [value: string \| BinaryData]) => `void` |
| `store` | [`ExternalStoreWebSocket`](classes/ExternalStoreWebSocket.md) |
| `useUpdates` | (`callback`: (`value`: `string` \| `BinaryData`) => `void`) => `void` |
| `useValue` | () => `string` \| `BinaryData` |

#### Defined in

[factories/makeExternalStoreWebSocket.ts:4](https://github.com/react-noui/external-store/blob/50c9d32/src/factories/makeExternalStoreWebSocket.ts#L4)

___

### syncExternalStore

▸ **syncExternalStore**\<`S`\>(`store`): `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`ExternalStore`](classes/ExternalStore.md)\<`unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `store` | `S` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `getValue` | () => `S`[``"value"``] |
| `setValue` | (...`args`: `Parameters`\<`S`[``"setValue"``]\>) => `void` |
| `store` | `S` |
| `useUpdates` | (`callback`: (`value`: `S`[``"value"``]) => `void`) => `void` |
| `useValue` | () => `S`[``"value"``] |

#### Defined in

[factories/syncExternalStore.ts:4](https://github.com/react-noui/external-store/blob/50c9d32/src/factories/syncExternalStore.ts#L4)
