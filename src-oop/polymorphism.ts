// polymorphism berasal dari bahasa yunani yang ber arti banyak bentuk

// dalam oop polymorphism adalah kemampuan sebuah object untuk berubah bentuk menjadi bentuk lain

// polymorphism erat hubungan nya dengan inheritance

// jadi sebuah objek bisa berubah bentuk ke keturunan nya

export interface KontrakOrang {
    namaNya():string
    GajiDalam(bulan: number):number
}

export class Employee implements KontrakOrang {
    constructor(public name: string){}

     namaNya(): string {
        return this.name
    }

    GajiDalam(bulan: number): number {
        return bulan * 12000000
    }
}

export class Manager extends Employee implements KontrakOrang{
    constructor(public kelas:number, name:string){
        super(name)
    }

    override GajiDalam(bulan: number): number {
        return bulan * 15000000
    }

    bandingkanDenganEmployee(): void {
        console.info(this.GajiDalam(1), super.GajiDalam(1))
    }

    HaloDariManager():string {
        return super.name + "saya adalah manager dengan kelas: " + String(this.kelas)
    }
}

export class VicePresident extends Manager {

}

