import {Employee} from "./Employee";
export class EmployeeManager {
    static listEmployee: Employee[] = [];

    static add(employee: Employee) {
        EmployeeManager.listEmployee.push(employee);
    }

    static display(): void {
        for (const employee of EmployeeManager.listEmployee) {
            console.table(employee);
        }
    }

    static deleteEmployee(id: number) {
        EmployeeManager.listEmployee.filter(employee => employee.id !== id);
    }

    static editEmployee(id: number, employeeEdit: Employee): void {
        // EmployeeManager.listEmployee = EmployeeManager.listEmployee.map(employee => employee.id === id)
        // ? (...employeeEdit) as Employee : (...employee) as Employee

        for (let i = 0; i< EmployeeManager.listEmployee.length; i++) {
            if (EmployeeManager.listEmployee[i].id === id) {
                EmployeeManager.listEmployee[i] = employeeEdit
            }
        }
    }

}