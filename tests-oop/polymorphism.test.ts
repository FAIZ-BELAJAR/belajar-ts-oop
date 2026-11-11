import {Employee, Manager} from "../src-oop/polymorphism"

describe('it should support', () => { 
    it('suport polymorphism', () => {
        let employee: Employee = new Employee("Faiz")
        // parent class bisa berubah bentuk menjadi child class nya
        // itulah yang disebut polymorphism

        employee = new Manager(12, "Joko")

        let employeeA: Employee = new Employee("Faizz")
        let ManagerB: Manager = new Manager(12, "Faizz")


        function sayHello(employee: Employee): string {
           return (`hello ${employee.name}`)
        }

        expect(sayHello(employeeA)).toBe(sayHello(ManagerB))//manager juga bisa dimasukan ke dalam fungsi sayHello yang memiliki jenis parameter Employee karna dia adalah keturunan dari Employee maka bisa, Ini disebut method polymorphism
    });
    
 })