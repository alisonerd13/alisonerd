/* eslint-disable no-prototype-builtins */
interface SerializableObject {
  [key: string]: string | number | boolean;
}

export function serialize(obj: SerializableObject, isStartingFromMiddle = false): string {
  const str = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      str.push(`${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`);
    }
  }
  return str.length > 0 && !isStartingFromMiddle ? '?' + str.join('&') : '';
}
