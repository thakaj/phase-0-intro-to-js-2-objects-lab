const employee = {
    name:  `Sam`,
    streetAddress: '10 Hughes Lane',
}
function updateEmployeeWithKeyAndValue(employee,key, value){
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
  }
  function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value){
    obj[key] = value;
    return obj
  }

  function deleteFromEmployeeByKey(obj,key){
    const newEmployee = {...obj};
    delete newEmployee[key];
    return newEmployee;
   }

   function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key];
    return employee;
   }