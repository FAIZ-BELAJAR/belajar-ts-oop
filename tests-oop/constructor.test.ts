import {Mobil} from "../src-oop/constructor"

describe('it should support constructor', () => {
    it('harusnya bisa', () => {
        const mobil1 = new Mobil("12211", "Mazda", "V8");

        expect(mobil1).toEqual({
            id: "12211",
            nama: "Mazda",
            mesin: "V8"
        })

        expect(mobil1.NyalakanMesin()).toBe("vroom vroom dari Mazda mesin V7")
    });
    
});
