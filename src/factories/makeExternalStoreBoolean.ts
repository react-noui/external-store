import { ExternalStoreBoolean } from "../stores/ExternalStoreBoolean";
import { syncExternalStore } from "./syncExternalStore";

/**
 * External store for use with a boolean value.
 * @param arg Boolean
 * @example
 * const MySetting = makeExternalStore(false);
 * 
 * const handleChange = (event) =>
 *   MySetting.setValue(event.target.checked);
 * 
 * const SettingCheckbox = () => (
 *   <input checked={MySetting.useValue()} onChange={handleChange}
 * );
 */
export function makeExternalStoreBoolean(arg: boolean = false) {
  const store = new ExternalStoreBoolean(arg);
  return {
    ...syncExternalStore(store),
    setTrue: store.setTrue,
    setFalse: store.setFalse,
    toggle: store.toggle,
  };
}
