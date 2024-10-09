export default function cleanSet(set, startString) {
  const matched = [];
  if (typeof startString !== 'string' || startString === '') return '';
  for (const s of set) {
    if (typeof s === 'string' && s.startsWith(startString) && s !== startString) {
      matched.push(s.substring(startString.length));
    }
  }
  return matched.join('-');
}
