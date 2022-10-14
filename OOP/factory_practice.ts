function Developer(name) {
    this.name = name;
    this.type = "Developer"
}
function Tester(name) {
    this.name = name;
    this.type = "Tester";
}
function EmployeeFactory() {
    this.create = (name:number,type:number) => {
        switch(type) {
            case 1:
                return new Developer(name);
                break;
            case 2:
                return new Tester(name);
                break;
        }
    }
}
const employeeFactory = new EmployeeFactory();
const employees = [];

employees.push(employeeFactory.create("Patrick",1));