import {Employee} from "./Employee";
import {EmployeeManager} from "./EmployeeManager";

let employee1 = new Employee(1,'Doan', 'Duy', new Date('1994-05-04'), 'Ha Noi', 'staff');
let employee2 = new Employee(2,'Doan', 'Dung', new Date('1992-08-21'), 'Ha Noi', 'staff');

EmployeeManager.add(employee1);
EmployeeManager.add(employee2);
EmployeeManager.display();

let employee3 = new Employee(3,'Vu', 'Lan', new Date('1997-10-11'), 'Ha Noi', 'staff');
EmployeeManager.editEmployee(2,employee3);
console.log('-----------Sau khi edit-----------');
EmployeeManager.display();

