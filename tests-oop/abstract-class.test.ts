import {Customer, RegularCustomer} from "../src-oop/abstract-class"

describe('i should support', () => { 
    it('support abstract class', () => {
        const customer1 = new RegularCustomer(1,"anjay")


        function Lookup(kustom: Customer):string {
            if (kustom instanceof RegularCustomer){
                const Rc = kustom as RegularCustomer
                Rc.sayHello("Jiman")

                return Rc.name
            }

            return ""
        }

        expect(Lookup(customer1)).toBe("anjay");

    });
    

 })