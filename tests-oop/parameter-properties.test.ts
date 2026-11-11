import {Pengguna} from "../src-oop/parameter-properties"

describe('test dari param prop', () => { 
    it('should support parameter properties', () => {
        const P1 = new Pengguna("Faiz", 12)
        expect(P1).toEqual({
            name: "Faiz",
            umur:13
        })
        
    });
    
 })