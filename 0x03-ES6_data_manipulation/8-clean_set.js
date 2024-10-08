export default function cleanSet(set, startString) {
  const matched = [];
  if (startString === '') return '';
  for (const s of set) {
    if (s.startsWith(startString) && s !== startString) {
      matched.push(s.substring(startString.length));
    }
  }
  return matched.join('-');
}
