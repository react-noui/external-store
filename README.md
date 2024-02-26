# @react-noui/external-store

Simple external stores for your control flow.

# Installation

With yarn
```bash
yarn add @react-noui/external-store
```
With npm
```bash
npm install --save @react-noui/external-store
```

# Basic Usage

You can use any primitive, and most complex types with `makeExternalStore(defaultValue)`.

```typescript
// src/stores.ts
import { makeExternalStore } from "@react-noui/external-store";
export const BoolStore = makeExternalStore(false);
export const StringStore = makeExternalStore("");
export const NumberStore = makeExternalStore(0);
export const MapStore = makeExternalStore(new Map<string, number>());
export const SetStore = makeExternalStore(new Set<string>());
export const RecordStore = makeExternalStore({ foo: 0, bar: "" });
export const ArrayStore = makeExternalStore<string>([]);
export const RegExpStore = makeExternalStore(new RegExp("", "gi"));
```

# Advanced Usage

More complex operations can use specialized `makeExternalStore{SPECIALTY}` functions.

## LocalStorage, SessionStorage access
### `makeExternalStoreStorage<T>`

Syncing with `Storage` types in `React` can be conflated with unintended effects. This library offers a solution when dealing with `Storage` on the `DOM`.

Make a storage singleton.
```typescript
// src/stores.ts
import { makeExternalStoreStorage } from "@react-noui/external-store";

export const MySetting = makeExternalStoreStorage(localStorage, "my_setting", false);
```
In `MySetting` example, we check if `localStorage.get("my_setting")` exists.
 - If it _does_, then we will use the existing value.
 - If it _does not_ then we will set `localStorage` to the provided `defaultValue`.

Using `MySetting` singleton store in a `React` component:
```tsx
// src/components/MySettingCheckbox.tsx
import { MySetting } from "../stores";

export const MySettingCheckbox = () => (
  <input
    type={checkbox}
    value={MySetting.useValue()}
    onChange={(event) => MySetting.setValue(event.target.checked)}
  />
)
```

## Custom Events
### `makeExternalStoreCustomEvent<T>`

You can store event data from any event type that you expect.

```typescript
// src/stores.ts
import { makeExternalStoreCustomEvent } from "@react-noui/external-store";

const FooListener = makeExternalStoreCustomEvent("event__foo", { bar: 1 });

const FooListenerNow = makeExternalStoreCustomEvent("event__foo", { bar: 1 }, { autoListen: true });
```

The difference between `FooListenerNow` and `FooListener` is the timing of adding an event listener.

`FooListener` will register a listener for `"event__foo"` *ONLY* when the hook `FooListener.useValue()` is called in a `React` component.

If your event can happen before a component renders (ie: race condition), `FooListenerNow` will register a listener immediately upon creation. This means your `React` components can have event data that was emitted before rendering.

`autoListen` is opt-in to preserve memory and performance. With this option, an event listener is always listening, and updating `FooListenerNow`.

By default, an event listener is only added when the `FooListener.useValue()` hook is rendered.
