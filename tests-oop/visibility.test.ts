import {Counter, TurunanCounter, jenis} from "../src-oop/visibility"

describe('it should', () => { 
    it('support visibility', () => {
        const counterparent = new Counter
        counterparent.Increment(jenis.privat) // ini bisa dilakukan
        counterparent.Increment(jenis.protected) //ini juga bisa dilakukan
        counterparent.Increment(jenis.public) //ini bisa juga dilakukan

        const counterChild = new TurunanCounter
        counterChild.Increment(jenis.privat) // ini tak bisa dilakukan
        counterChild.Increment(jenis.protected) //inibisa dilakukan
        counterChild.Increment(jenis.public) //ini bisa juga dilakukan

        counterChild.counter_prvt++// karna private tak boleh diakses dari luar
        counterChild.counter_prtcted++ //karna protected juga tak boleh diakses dari luar
        counterChild.counter_pblc++ //boleh karna public
        expect(counterparent).toEqual(counterChild);
    });
    
})