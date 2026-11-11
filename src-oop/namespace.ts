// selain menggunakan js modules, di ts ada cara lain untuk mengorganisir kode program kita, yaoitu menggunakan namespace
// namespace biasanya digunakan untuk mengorganisir kode ketika dalam satu module terdapat banyak sekali kode, kita bisa kelola dalam namespace
// jika module kita anggap sebuah folder maka namespace adalah subfolder di dalam module
// untuk membuat namespace kita bisa gunakan kata kunci namespace, dan bisa kita tambahkan class, function dll, di dalam namespace tersebut 

export namespace MathUtil{
    export const PI: number = 3.14;

    export function KaliTiga(angka: number):number {
        return angka * 3
    }

    export class AngkaSampeLima{
        static Satu:number = 1
        static Dua:number = 2
        static Tiga:number = 3
        static Empat:number = 4
        static Lima:number = 5
    }
    // ... dan lain lain
}