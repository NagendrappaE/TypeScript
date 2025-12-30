
import { EmployeeService } from './com/ece/service/EmployeeService';

const service = new EmployeeService();
service.addEmployee(1, 'Alice', 'Developer');
service.addEmployee(2, 'Bob', 'Manager');

const employee = service.getEmployeeById(1);
console.log('Employee with ID 1:', employee);
