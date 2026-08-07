function promoteEmployee(employee, newTitle) {
   const updateemployee = {...employee,title:newTitle}
   return updateemployee;
}

console.log(promoteEmployee({ name: "Rafi", title: "Junior Dev" }, "Senior Dev"))