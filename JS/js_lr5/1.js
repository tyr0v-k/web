function employeeNum(arr) {
  arr2 = [];
  str = '';
  for (let i = 0; i < arr.length; i++){
    employee = new Object();
    employee.name = arr[i];
    employee.number = arr[i].length;
    arr2[i] = employee;
  }

  for (let i = 0; i < arr2.length; i++){
    str += 'Name: ' + arr2[i].name + ' - Personal Number: ' + arr2[i].name + '\n';
  }
  return str;
}
console.log(employeeNum([
'Silas Butler',
'Adnaan Buckley',
'Juan Peterson',
'Brendan Villarreal'
]));
