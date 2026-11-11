import {sayHello} from "../src-oop/type-cast"
import {Employee, Manager, VicePresident} from "../src-oop/polymorphism"

describe('it should support', () => { 
    it('support type cast', () => {
        const vp: VicePresident = new VicePresident(12, "Anjay")

        sayHello(vp);
    });
    
 })
