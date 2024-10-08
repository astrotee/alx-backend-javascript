export default function cleanSet(set, startString) {
  const matched = [];
  if (startString === '') return '';
  for (const s of set) {
    if (s.indexOf(startString) === 0) {
      matched.push(s.slice(startString.length));
    }
  }
  return matched.join('-');
}
