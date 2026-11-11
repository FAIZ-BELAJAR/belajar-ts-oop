// di ts, secara default setiap membuat properties atau method, maka sifatnya adalah bisa diakses di dalam class, atau di luar class ini disebut "public"

// nah kita bisa mensettingnya agar tak selalu properti atau method suatu class bisa di akses dari luar 

// public -> memberikan akses ke manapun 
// protected -> hanya memberikan akses pada child class yang mewarisi dan class nya sendiri
// private -> hanya bisa di manipulasi oleh classnya sendiri 

export enum jenis {
    privat = "private",
    protected = "protected",
    public = "public"
}
export class Counter {
    private counter_prvt: number = 0;
    protected counter_prtcted: number = 0;
    public counter_pblc: number = 0;

    public Increment(j: string) {
        switch (j) {
            case jenis.privat:
                this.counter_prvt++
                break;
            case jenis.protected:
                this.counter_prtcted++
                break
            case jenis.public:
                this.counter_pblc++
                break
            default:
                break;
        }
    }


}

export class TurunanCounter extends Counter{
    public Increment(j: string) {
        switch (j) {
            case jenis.privat:
                this.counter_prvt++ //ini dilarang
                super.Increment(j) // ini yang seharusnya dilakukan
                break;
            case jenis.protected:
                this.counter_prtcted++
                break
            case jenis.public:
                this.counter_pblc++
                break
            default:
                break;
        }
    }
}
