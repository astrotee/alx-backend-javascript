export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const int8view = new Int8Array(buffer);
  if (int8view[position] === undefined) {
    throw new Error('Position outside range');
  }
  int8view[position] = value;
  return new DataView(buffer);
}
