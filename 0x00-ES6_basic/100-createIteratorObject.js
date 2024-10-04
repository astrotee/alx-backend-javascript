export default function* createIteratorObject(report) {
  for (const emps of Object.values(report.allEmployees)) {
    for (const emp of emps) {
      yield emp;
    }
  }
}
