export class EmployeeService {
  private employees: { id: number; name: string; position: string }[] = [];

  addEmployee(id: number, name: string, position: string): void {
    this.employees.push({ id, name, position });
  }

  getEmployeeById(id: number) {
    return this.employees.find(emp => emp.id === id);
  }

  getAllEmployees() {
    return this.employees;
  }

  removeEmployee(id: number): boolean {
    const index = this.employees.findIndex(emp => emp.id === id);
    if (index !== -1) {
      this.employees.splice(index, 1);
      return true;
    }
    return false;
  }
}
