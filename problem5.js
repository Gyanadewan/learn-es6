// const getEmployeeDept = (employee) => {
//     const title = employee.job.title
//     const department = employee.job.department  // use dot notation
//     return {title,department}
// }

// console.log (getEmployeeDept ({ name: "Nadia", job: { title: "PM", department: "Product" } }
// ))


const getEmployeeDept = (employee) => {
  const {job: {title,department}} = employee;
  return {title,department}
}

console.log (getEmployeeDept ({ name: "Nadia", job: { title: "PM", department: "Product" } }
));