// static merupakan kata kunci yang bisa digunakan pada properties atau method di clas, yang menyebabkan properties atau method
// tersebut bukan lagi sebagai bagian dari object yang dibuat dari class
// static properties atau method bisa menyebabkan seakan akan kita membuat glbal variable atau function, yang bisa diakses secara langsung, tanpa membuat object class nya 
// kita juga bisa menambah visbility pada static properties atau method
// biasanya static ini sering digunakan pada jenis class utility / helper

export class Configuration {
    static NAME: string = "Belajar Typescript OOP"
    static VERSION: number = 1.0
    static AUTHOR: string = "Faiz Hannan Hakim"
}

export class MathUtil {
    static sum(...val: Array<number>): number {
        let hasil = 0
        for (const angka of val){
            hasil += angka
        }
        return hasil
    }
}

// cara mengaksesnya cukup unik tak perlu membuat object baru namun lngsung saja dari classnya