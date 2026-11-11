// constructor adalah method yang pertama kali dipanggil saat class dibuat

export class Mobil{
    readonly id: string;
    public nama?: string = "";
    protected mesin?:string = "";

    constructor(id: string, nama?: string, mesin?:string){
        console.log("memanggil constructor mobil")
        this.id = id
        this.nama = nama ?? ""
        this.mesin = mesin ?? ""
    }

    NyalakanMesin(): string {
        return `vroom vroom dari ${this.nama} mesin ${this.mesin}`
    }
}