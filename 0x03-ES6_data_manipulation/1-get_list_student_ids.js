export default function getListStudentIds(list) {
  if (list instanceof Array) {
    return list.map((o) => o.id);
  }
  return [];
}
