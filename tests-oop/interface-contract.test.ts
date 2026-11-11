import {Person} from "../src-oop/interface-contract"

describe('it should support interface contract', () => { 
    it('support interface contract', () => {
        const person = new Person("Faiz")

        expect(person.sayHello("Bambang")).toBe("halo bambang my name is Faiz")
    });
    
 })