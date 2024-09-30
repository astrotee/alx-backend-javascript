export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(emps) {
      return Object.keys(emps).length;
    },
  };
}
