import {Category} from "../src-oop/getter-setter"

describe('it should support getter setter', () => { 
    it('getter setter', () => {
        var kategori1 = new Category(1, "Makanan", "Barang untuk di konsumsi")
        expect(kategori1).toEqual({
            id: 1,
            nama:"Makanan",
            informasi:"Barang untuk di konsumsi"
        })

        kategori1.NamaKategori = "Minuman"
        console.info(kategori1)
        expect(kategori1).toEqual({
            id: 1,
            nama:"Makanan",
            informasi:"Barang untuk di konsumsi"
        })
    });
    
 })