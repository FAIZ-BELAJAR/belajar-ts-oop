// samai sekarang ketika kita ingin mengubah data properties kita bisa langsung gunakan operator =(sama dengan) dan ketika ingin mengambil data cukup gunakan .(titik)

// js memiliki fitur bernama getter setter dan begitu juga di ts dimana kita bisa membuat method untuk mengubah properties dan juga method untuk mengambil properties

// karena bentuknya adalah method maka kita bisa menambahkan validasi apapun pada method tersebut sebelum prperties aslinya diubah

export class Category{
    private readonly id: number;
    nama: string
    informasi?:string = "";

    constructor(id: number, nama: string, informasi?:string) {
        this.id = id
        this.nama = nama
        this.informasi = informasi ?? ""
    }

    // Kode Getter Setter 

    get NamaKategori(): string {
        return this.nama
    }

    set NamaKategori(v:string) {
        this.nama = v
    }

    get Informasinya(): string {
        if (this.informasi){
            return this.informasi
        }

        return "kosong"
    }

    set Informasinya(v:string){
        this.informasi = v
    }

    get Idnya(): number{
        return this.id
    }
}