// function Developer(name:string) {
//     this.name = name;
//     this.type = "Developer"
// }
// function Tester(name:string) {
//     this.name = name;
//     this.type = "Tester";
// }
// function EmployeeFactory() {
//     this.create = (name:number,type:number) => {
//         switch(type) {
//             case 1:
//                 return new Developer(name);
//                 break;
//             case 2:
//                 return new Tester(name);
//                 break;
//         }
//     }
// // }
// // const employeeFactory = new EmployeeFactory();
// const employees = [];

// employees.push(employeeFactory.create(1,1));
enum Department {
    Engineering = 'engineering',
    Marketing = 'marketing',
    Accounting = 'accounting',
}
interface IEmployee {
    getDepartment(): Department
    getSalary() : number;
    readonly name:  string;
}
class MarketingManager implements IEmployee {
    getDepartment(): Department {
        return Department.Marketing;
    }
    getSalary(): number{
        return 75000;
    }
    name: 'Mike Hunt'
}
class SoftwareEngineer implements IEmployee {
    getDepartment(): Department {
        return Department.Engineering;
    }
    getSalary(): number{
        return 90000;
    }
    name: 'Mike Hawk'
}
class Accounting implements IEmployee {
    getDepartment(): Department {
        return Department.Accounting;
    }
    getSalary(): number{
        return 80000;
    }
    name: 'Ben Dover'
}
class OrganizationFactory {

    constructor(name: string) { }
}