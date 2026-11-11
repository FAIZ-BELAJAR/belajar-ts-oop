import {ClassChildKucing, jenisHewan} from "../src-oop/method-overriding"

describe('it should', () => { 
    it('support method overriding', () => {
        const kucing1: ClassChildKucing = new ClassChildKucing("Miko", jenisHewan.Karnivora)
        expect(kucing1.SukaMakan()).toBe("makanan dengan jenis karnivora, tepatnya daging dan tikus")
    });
    
 })