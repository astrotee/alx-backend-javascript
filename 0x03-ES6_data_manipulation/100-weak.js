export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  const load = (weakMap.get(endpoint) || 0) + 1;
  weakMap.set(endpoint, load);
  if (load >= 5) {
    throw new Error('Endpoint load is high');
  }
}
