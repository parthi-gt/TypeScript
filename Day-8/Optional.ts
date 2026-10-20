interface Employee 
{
  eid: number;
  ename: string;
  edepartment?: string;
}

let emp: Employee = {
  eid: 101,
  ename: "Rahul",
};

let emp1: Employee = {
  eid: 202,
  ename: "John",
  edepartment: "Test",
};

console.log(emp.eid, emp.ename);
console.log(emp1.ename, emp1.eid, emp1.edepartment);