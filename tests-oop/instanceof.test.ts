import {CekClass} from "../src-oop/operator-instanceof"
import { Pengguna } from "../src-oop/parameter-properties";

describe('it should', () => { 
    it('support instance of', () => {
        expect(CekClass(new Pengguna("Faiz", 12))).toBe("penggunaa")
    });
    
 })