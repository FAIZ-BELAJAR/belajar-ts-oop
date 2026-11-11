export enum jenisHewan{
   Herbivora = "Herbivora",
   Karnivora = "Karnivora"
}

export class ClassParentHewan {
    nama: string;
    jenis: jenisHewan;

    constructor(nama: string, jenis: jenisHewan){
        this.nama = nama;
        this.jenis = jenis
    }

    SukaMakan(): string {
        return "kosong"
    }

    
}

export class ClassChildKucing extends ClassParentHewan {
    constructor(nama: string, jenis:jenisHewan){
        super(nama, jenis)
    }

    SukaMakan(): string {
        return `makanan dengan jenis ${this.jenis}, tepatnya daging atau tikus`
    }


}