export interface HasName {
    nama: string;
}

export interface SayHello{
    sayHello(nama: string): void 
}

export class Person implements HasName, SayHello{
    nama: string;

    constructor(nama: string){
        this.nama = nama
    }

    sayHello(nama: string): string {
        return (`Halo ${nama}, my name is ${this.nama}`)
    }
}