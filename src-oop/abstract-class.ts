// abstract class merupakan deklarasi class yang belum selesai 
// abstract class membolehkan memiliki properties atau method yang abstract atau belum di buat implementasinya
// abstract class juga tidak bisa dibuat menjadi object menggunakan kata kunci new
// kegunaan abstract class hanya digunakan sebagai parent class yang nantinya akan diturunkan ke child child class nya 

export abstract class Customer{
    abstract name: string;

    constructor(readonly id: number){
        this.id = id
    }

    abstract sayHello(name:string):void 
}

export class RegularCustomer extends Customer {
    name: string;

    constructor(id: number, name: string) {
        super(id);
        this.name = name;
    }

    sayHello(name: string): void {
        console.info(`Hello ${name}, my name is ${this.name}`)
    }
}