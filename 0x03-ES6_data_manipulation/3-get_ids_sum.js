export default function getStudentIdsSum(students) {
  return students.reduce((previous, current) => ({ id: (previous.id + current.id) }), { id: 0 }).id;
}
